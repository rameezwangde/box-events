import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ReactiveEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  const [pointer, setPointer] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (event) => {
      setPointer({ x: event.clientX, y: event.clientY });
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);

      const card = event.target.closest?.('.reactive-card');
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        card.style.setProperty('--card-x', `${x}px`);
        card.style.setProperty('--card-y', `${y}px`);
        card.style.setProperty('--tilt-x', `${((y / rect.height) - 0.5) * -5}deg`);
        card.style.setProperty('--tilt-y', `${((x / rect.width) - 0.5) * 5}deg`);
      }
    };

    const leave = (event) => {
      const card = event.target.closest?.('.reactive-card');
      if (card) {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      }
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerout', leave, true);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerout', leave, true);
    };
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="cursor-glow" style={{ left: pointer.x, top: pointer.y }} />
    </>
  );
}