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
  const statusRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLAnchorElement>(null);

  const text = useTypewriter();

  useGSAP(
    () => {
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
          statusRef.current,
          { opacity: 0, y: 10, duration: 0.5, ease: "power2.out" },
          "-=0.1",
        )
        .from(
          arrowRef.current,
          { opacity: 0, y: -16, duration: 0.5, ease: "back.out(2)" },
          "-=0.1",
        );

      gsap.to(arrowRef.current, {
        y: 14,
        duration: 0.9,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.8,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center gap-10 overflow-hidden bg-white dark:bg-[#0f1117] transition-colors duration-300"
    >
      {/* Decorative floating gradient orbs */}
      <div
        className="blob-1 absolute -top-24 -left-36 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(211,203,245,0.35) 0%, transparent 65%)",
        }}
      />
      <div
        className="blob-2 absolute -bottom-24 -right-36 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(211,203,245,0.25) 0%, transparent 65%)",
        }}
      />

      <div className="flex items-center justify-center gap-16 flex-wrap px-8">
        {/* Profile image */}
        <div
          ref={imageRef}
          className="relative w-[320px] h-[380px] md:w-[420px] md:h-[480px] shrink-0 transition-transform duration-700 hover:scale-[1.02] cursor-default"
        >
          <Image
            src="/img/profile.jpg"
            alt="Teja Tammali"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>

        {/* Name + typewriter + status */}
        <div className="flex flex-col items-center text-center max-w-[340px]">
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

          {/* Systems status badge */}
          <div
            ref={statusRef}
            className="flex items-center gap-2 mt-5 px-4 py-2 rounded-full border border-green-400/30 bg-green-400/5"
          >
            <span
              className="status-dot w-2 h-2 rounded-full bg-green-400 shrink-0"
            />
            <span className="text-[11px] tracking-[2px] text-muted font-medium uppercase">
              All Systems Operational
            </span>
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        ref={arrowRef}
        href="#stack"
        className="scroll-arrow"
        aria-label="Scroll to stack"
      />
    </section>
  );
}
