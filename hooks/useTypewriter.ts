import { useState, useEffect, useRef } from "react";

const PHRASES = [
  "hey there!",
  "i'm teja.",
  "SRE-minded engineer.",
  "building reliability, one SLO at a time.",
  "currently at Morgan Stanley.",
  "D.C. area.",
  "fan of F1 and pizza.",
  "thanks for visiting!",
];

const TYPE_SPEED = 50;
const DELETE_SPEED = 30;
const PAUSE_AFTER_TYPE = 1000;
const PAUSE_AFTER_DELETE = 500;

export function useTypewriter(): string {
  const [displayText, setDisplayText] = useState("");
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = PHRASES[phraseIndex.current];

      if (!isDeleting.current) {
        if (charIndex.current < current.length) {
          charIndex.current++;
          setDisplayText(current.slice(0, charIndex.current));
          timeout = setTimeout(tick, TYPE_SPEED);
        } else {
          timeout = setTimeout(() => {
            isDeleting.current = true;
            tick();
          }, PAUSE_AFTER_TYPE);
        }
      } else {
        if (charIndex.current > 0) {
          charIndex.current--;
          setDisplayText(current.slice(0, charIndex.current));
          timeout = setTimeout(tick, DELETE_SPEED);
        } else {
          isDeleting.current = false;
          phraseIndex.current = (phraseIndex.current + 1) % PHRASES.length;
          timeout = setTimeout(tick, PAUSE_AFTER_DELETE);
        }
      }
    }

    timeout = setTimeout(tick, PAUSE_AFTER_DELETE);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return displayText;
}
