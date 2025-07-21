import React, { useRef } from "react";
import useIntersectionObserver from "../../hooks/use-intersection-observer";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedWrapper = ({
  children,
  className = "",
}: AnimatedWrapperProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref, { freezeOnceVisible: true });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${
        isVisible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;
