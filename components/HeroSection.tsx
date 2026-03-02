"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTypewriter } from "@/hooks/useTypewriter";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLAnchorElement>(null);

  const text = useTypewriter();

  useGSAP(
    () => {
      // Entrance timeline
      const tl = gsap.timeline({ delay: 0.15 });

      tl.from(imageRef.current, {
        opacity: 0,
        x: -80,
        scale: 0.96,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          nameRef.current,
          { opacity: 0, y: 36, duration: 0.8, ease: "power3.out" },
          "-=0.55",
        )
        .from(
          textRef.current,
          { opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.25",
        )
        .from(
          arrowRef.current,
          { opacity: 0, y: -16, duration: 0.5, ease: "back.out(2)" },
          "-=0.15",
        );

      // Infinite bounce for arrow (runs independently after entrance)
      gsap.to(arrowRef.current, {
        y: 14,
        duration: 0.9,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.6,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col items-center justify-center gap-10"
    >
      <div className="flex items-center justify-center gap-16 flex-wrap px-8">
        {/* Profile image */}
        <div ref={imageRef} className="relative w-[420px] h-[480px] shrink-0">
          <Image
            src="/img/profile.jpg"
            alt="Teja Tammali"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>

        {/* Name + typewriter */}
        <div className="flex flex-col items-center text-center max-w-[320px]">
          <h1
            ref={nameRef}
            className="font-light tracking-widest text-heading leading-tight mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            TEJA TAMMALI
          </h1>
          <p
            ref={textRef}
            className="font-light text-body"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)", minHeight: "2rem" }}
          >
            {text}
            <span className="typewriter-cursor" aria-hidden="true" />
          </p>
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        ref={arrowRef}
        href="#about"
        className="scroll-arrow"
        aria-label="Scroll to about section"
      />
    </section>
  );
}
