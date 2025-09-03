import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import confetti from 'canvas-confetti';

export interface ConfettiCanvasRef {
  fireConfetti: () => void;
}

const ConfettiCanvas = forwardRef<ConfettiCanvasRef>((_, ref) => {
  const prefersReducedMotion = useRef<boolean>(false);
  const confettiInstance = useRef<confetti.CreateTypes | null>(null);

  const colors = [
    '#2C3E35',
    '#6B8CAE',
    '#9CAF88',
    '#B8860B',
    '#E6B85C',
    '#E8B4CB',
  ];

  const fireConfetti = () => {
    if (prefersReducedMotion.current || !confettiInstance.current) return;

    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: colors,
      shapes: ['square', 'circle'],
      disableForReducedMotion: true,
    };

    function fire(particleRatio: number, opts: any) {
      if (confettiInstance.current) {
        confettiInstance.current({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  useImperativeHandle(ref, () => ({
    fireConfetti,
  }), []);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      prefersReducedMotion.current = mediaQuery.matches;

      const handleChange = (e: MediaQueryListEvent) => {
        prefersReducedMotion.current = e.matches;
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Create confetti instance for custom canvas
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';

    document.body.appendChild(canvas);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    confettiInstance.current = confetti.create(canvas, { resize: true });

    // Add some initial falling confetti using animation loop
    const startInitialConfetti = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches || !confettiInstance.current) return;

      const duration = 3 * 1000; // 3 seconds
      const animationEnd = Date.now() + duration;
      let skew = 1;

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const frame = () => {
        const timeLeft = animationEnd - Date.now();
        const ticks = Math.max(200, 500 * (timeLeft / duration));
        skew = Math.max(0.8, skew - 0.001);

        // Only spawn confetti 30% of the time to reduce density
        if (Math.random() < 0.3 && confettiInstance.current) {
          confettiInstance.current({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,
            origin: {
              x: Math.random(),
              y: (Math.random() * skew) - 0.2
            },
            colors: colors,
            shapes: ['square', 'circle'],
            gravity: randomInRange(0.4, 0.6),
            scalar: randomInRange(0.4, 1),
            drift: randomInRange(-0.4, 0.4),
            disableForReducedMotion: true,
          });
        }

        if (timeLeft > 0) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    };

    // Start falling confetti after canvas is ready
    setTimeout(startInitialConfetti, 500);

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.body.removeChild(canvas);
    };
  }, [colors]);

  return null; // Canvas is managed in useEffect
});

export default ConfettiCanvas;