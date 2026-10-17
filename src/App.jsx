import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loading from './components/Loading';
import Sound from './components/Sound';
import NoteContainer from './components/NoteContainer';
import WithTrigger from './components/WithTrigger';
import { sounds, getSound } from './utils/sounds';
import Flicker from './components/Flicker';
import BackgroundImg from './components/BackgroundImg';
import PlayButton from './components/PlayButton';
import colours from './utils/colours';
import requestSound, { resumeAudio } from './utils/web-audio';
import { startTone } from './utils/notes';
import Links from './components/Links';

const baseSoundIds = [sounds.drone, sounds.synthline];

const Background = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  height: 100%;
  background-size: 200% 200%;
  background-image: linear-gradient(45deg, ${colours.themeOne}dd, ${colours.themeTwo}dd);
  transform-origin: center;

  animation: Gradient 100s ease infinite;

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
      opacity: 0.8;
    }
    50% {
      background-position: 100% 25%;
      opacity: 1;
    }
    100% {
      background-position: 0% 50%;
      opacity: 0.8;
    }
  }
`;

const Background2 = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  height: 100%;
`;

const LinksWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 20px;
`;

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [baseSounds, setBaseSounds] = useState([]);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchBaseSounds = async () => {
      const urls = baseSoundIds.map((id) => getSound(id));
      const results = await Promise.all(
        urls.map((url) => requestSound(url, { loop: true }, false))
      );

      if (cancelled) return;
      setBaseSounds(results);
      setLoaded(true);
    };

    fetchBaseSounds();

    return () => {
      cancelled = true;
    };
  }, []);

  const playBaseSounds = async () => {
    // both audio graphs have to be unlocked by a user gesture before playing
    await Promise.all([resumeAudio(), startTone()]);
    baseSounds.forEach((sound) => sound());
    setPlay(true);
  };

  return (
    <>
      {loaded ? (
        <>
          {/* background images */}
          <Background className="App" />

          <BackgroundImg
            url="./bg3.jpeg"
            startX="10%"
            endX="100%"
            startY="10%"
            endY="0%"
            duration="150s"
            baseOpacity={0.2}
          />
          <BackgroundImg
            url="./bg.jpeg"
            startX="0%"
            endX="100%"
            startY="50%"
            endY="10%"
            duration="120s"
            baseOpacity={0.4}
          />
          <BackgroundImg
            url="./bg.jpeg"
            startX="100%"
            endX="0%"
            startY="30%"
            endY="5%"
            duration="90s"
            baseOpacity={0.4}
          />
          <BackgroundImg
            url="./bg2.jpeg"
            startX="60%"
            endX="100%"
            startY="5%"
            endY="0%"
            duration="190s"
            baseOpacity={0.3}
          />

          {/* Sounds and Animation */}
          {play ? (
            <Background2>
              {/* triggered sounds */}
              <WithTrigger>
                <Sound soundId="" />
              </WithTrigger>

              {/* synth */}
              <NoteContainer />
              <WithTrigger>
                <Flicker />
              </WithTrigger>
            </Background2>
          ) : (
            <PlayButton play={playBaseSounds} />
          )}
        </>
      ) : (
        <Loading />
      )}
      <LinksWrapper>
        <Links />
      </LinksWrapper>
    </>
  );
};

export default App;
