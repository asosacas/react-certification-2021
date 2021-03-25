import { useRef, useEffect } from 'react';

const useResetScroll = (changeDetector) => {
  const resetScrollRef = useRef(null);
  useEffect(() => {
    if (resetScrollRef.current) {
      resetScrollRef.current.scrollLeft = 0;
      resetScrollRef.current.scrollTop = 0;
    }
  }, [changeDetector]);
  return resetScrollRef;
};
export default useResetScroll;
