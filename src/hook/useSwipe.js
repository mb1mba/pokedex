import { useState } from "react";

const useSwipe = (leftAction, rightAction) => {

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
    const [swipeDirection, setSwipeDirection] = useState(null)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setSwipeDirection("")
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      leftAction();
      setSwipeDirection("animate__animated animate__slideInRight")
    } else if (isRightSwipe) {
      rightAction();
      setSwipeDirection("animate__animated animate__slideInLeft")
    }
  };

  return { onTouchStart, onTouchMove, onTouchEnd, swipeDirection, setSwipeDirection };
};

export default useSwipe;
