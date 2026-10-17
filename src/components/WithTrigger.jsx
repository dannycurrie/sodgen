import { Children, cloneElement } from 'react';
import { useSelector } from 'react-redux';

const WithTrigger = ({ children }) => {
  const soundId = useSelector((state) => state.sound.soundId);

  return <>{Children.map(children, (child) => cloneElement(child, { soundId, play: true }))}</>;
};

export default WithTrigger;
