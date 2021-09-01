import { useState } from 'react';
import { useEffect } from 'react';

const getVw = () => {
  const { innerWidth: width } = window;
  return { width };
};

const useWindowDimensions = () => {
  const [vw, setVw] = useState(getVw());

  useEffect(() => {
    const handlerResize = () => {
      setVw(getVw());
    };
    window.addEventListener('resize', handlerResize);
    return () => window.removeEventListener('resize', handlerResize);
  }, []);

  return vw;
};

export default useWindowDimensions;
