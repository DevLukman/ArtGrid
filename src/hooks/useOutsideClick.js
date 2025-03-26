import { useEffect, useRef } from "react";

export function useOutsideClick(setActiveInput, capturingPhase = true) {
  const searchref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (searchref.current && !searchref.current.contains(e.target)) {
          setActiveInput(false);
        }
      }
      document.addEventListener("click", handleClick, capturingPhase);
      return () =>
        document.removeEventListener("click", handleClick, capturingPhase);
    },
    [capturingPhase, setActiveInput],
  );
  return searchref;
}
