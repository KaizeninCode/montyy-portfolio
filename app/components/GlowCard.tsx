"use client";
import React, { useRef } from "react";

interface GlowCardProps {
  card: Card | Testimonial;
  children: React.ReactNode;
  index: number;
}

interface Card {
  title: string;
  imgPath: string;
  logoPath: string;
  review: string;
  date: string;
  responsibilities: string[];
}

interface Testimonial {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
}

const GlowCard = ({ card, children, index }: GlowCardProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const cardElement = cardRefs.current[index];
      if (!cardElement) return;

      const rect = cardElement.getBoundingClientRect();

      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;

      cardElement.style.setProperty("--start", `${angle + 60}`);
    };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />

      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" alt="star" key={i} className="size-5" />
        ))}
      </div>

      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      {children}
    </div>
  );
};

export default GlowCard;
