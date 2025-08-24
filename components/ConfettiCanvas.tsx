// ABOUTME: Canvas-based confetti animation component for wedding website
// ABOUTME: Handles particle system with mouse-responsive confetti effects

import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  shape: 'square' | 'circle' | 'triangle';
}

const ConfettiCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number | undefined>(undefined);
  const mouseRef = useRef({ x: 0, y: 0 });
  const prefersReducedMotion = useRef<boolean>(false);

  const colors = [
    '#1d2a62', '#87aece', '#f5f3d8', '#afd06e', 
    '#437118', '#6ba3d0', '#b8e086', '#2d4a0f',
    '#fd79a8', '#ffeaa7', '#ff7675'
  ];

  const createParticle = useCallback((x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 3 + 1;
    const shapes: ('square' | 'circle' | 'triangle')[] = ['square', 'circle', 'triangle'];
    
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - Math.random() * 2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 6 + 3,
      opacity: 1,
      life: 0,
      maxLife: Math.random() * 180 + 120,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    };
  }, []);

  const updateParticles = useCallback(() => {
    const particles = particlesRef.current;
    
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.1; // gravity
      particle.rotation += particle.rotationSpeed;
      particle.life += 1;
      
      // Fade out over time
      particle.opacity = Math.max(0, 1 - (particle.life / particle.maxLife));
      
      // Remove dead particles
      if (particle.life >= particle.maxLife || particle.y > window.innerHeight + 50) {
        particles.splice(i, 1);
      }
    }
  }, []);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    const particles = particlesRef.current;
    
    particles.forEach(particle => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      
      const halfSize = particle.size / 2;
      
      switch (particle.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, halfSize, 0, Math.PI * 2);
          ctx.fill();
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -halfSize);
          ctx.lineTo(-halfSize, halfSize);
          ctx.lineTo(halfSize, halfSize);
          ctx.closePath();
          ctx.fill();
          break;
        case 'square':
        default:
          ctx.fillRect(-halfSize, -halfSize, particle.size, particle.size);
          break;
      }
      
      ctx.restore();
    });
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    updateParticles();
    drawParticles(ctx);
    
    animationIdRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  const addConfettiAtPosition = useCallback((x: number, y: number) => {
    // Skip if reduced motion is preferred
    if (prefersReducedMotion.current) return;
    
    // Create confetti particles near position
    if (Math.random() < 0.4) { // 40% chance to create particle
      const particles = particlesRef.current;
      const maxParticles = prefersReducedMotion.current ? 50 : 150;
      if (particles.length < maxParticles) {
        const offsetX = (Math.random() - 0.5) * 50;
        const offsetY = (Math.random() - 0.5) * 50;
        particles.push(createParticle(x + offsetX, y + offsetY));
      }
    }
  }, [createParticle]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    mouseRef.current = {
      x: event.clientX,
      y: event.clientY,
    };
    
    addConfettiAtPosition(event.clientX, event.clientY);
  }, [addConfettiAtPosition]);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    event.preventDefault();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      mouseRef.current = {
        x: touch.clientX,
        y: touch.clientY,
      };
      
      addConfettiAtPosition(touch.clientX, touch.clientY);
    }
  }, [addConfettiAtPosition]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      prefersReducedMotion.current = mediaQuery.matches;
      
      const handleChange = (e: MediaQueryListEvent) => {
        prefersReducedMotion.current = e.matches;
      };
      
      mediaQuery.addEventListener('change', handleChange);
      
      // Cleanup function will remove this listener
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    resizeCanvas();
    
    // Add some initial falling particles for visual interest (only if motion is ok)
    if (!prefersReducedMotion.current) {
      const particles = particlesRef.current;
      const initialCount = prefersReducedMotion.current ? 5 : 20;
      for (let i = 0; i < initialCount; i++) {
        particles.push(createParticle(
          Math.random() * window.innerWidth,
          -50 - Math.random() * 100
        ));
      }
    }
    
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [resizeCanvas, handleMouseMove, animate, createParticle]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

export default ConfettiCanvas;