import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(
  onClickOutside: () => void,
  onClickInside: () => void
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref && ref.current && event.target instanceof Node) {
        if (ref.current.contains(event.target)) {
          console.log("inside");
          onClickInside();
        } else {
          console.log("outside");
          onClickOutside();
        }
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, onClickInside, onClickOutside]);

  return ref;
}
