import React, { useState } from "react";
const useIsVisible = (initVal) => {
  const [elmIsVisible, setElmIsVisible] = useState(initVal);

  const showElm = () => {
    setElmIsVisible(true);
  };

  const hideElm = () => {
    setElmIsVisible(false);
  };
  return {
    isVisible: elmIsVisible,
    display: showElm,
    hide: hideElm,
  };
};
export default useIsVisible;
