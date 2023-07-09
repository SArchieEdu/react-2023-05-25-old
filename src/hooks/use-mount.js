import { useEffect, useRef } from "react";

export function useMount(callback) {
  const cleanUp = useRef();

  useEffect(() => {
    if (!cleanUp.current) {
      cleanUp.current = callback() || (() => {});
      return;
    }

    return cleanUp.current;
  }, []);
}

// mount > render > unmount;

// mount > unmount > mount > render > unmount;
