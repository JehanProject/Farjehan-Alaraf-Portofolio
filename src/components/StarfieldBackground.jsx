import React, { useEffect, useRef } from 'react';

export default function StarfieldBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      // Normalize mouse coordinates -0.5 to 0.5
      mouseRef.current.targetX = (e.clientX / width - 0.5) * 35;
      mouseRef.current.targetY = (e.clientY / height - 0.5) * 35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Particle Stars
    const starCount = Math.min(Math.floor((width * height) / 4500), 180);
    let stars = [];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.8 + 0.4,
          baseAlpha: Math.random() * 0.7 + 0.2,
          alpha: Math.random() * 0.7 + 0.2,
          speed: Math.random() * 0.02 + 0.005,
          color: Math.random() > 0.3 ? '#00D2FF' : Math.random() > 0.5 ? '#FFD700' : '#FFFFFF',
          depth: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
        });
      }
    };

    initStars();

    // Shooting star state
    let shootingStar = null;
    const triggerShootingStar = () => {
      shootingStar = {
        x: Math.random() * width,
        y: Math.random() * (height * 0.4),
        length: Math.random() * 80 + 50,
        speed: Math.random() * 10 + 12,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        alpha: 1,
        decay: 0.02,
      };
      // Schedule next
      setTimeout(triggerShootingStar, Math.random() * 6000 + 4000);
    };

    const timer = setTimeout(triggerShootingStar, 3000);

    const render = () => {
      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep space ambient glow
      const grad = ctx.createRadialGradient(
        width * 0.5 + mouseRef.current.x * 2,
        height * 0.3 + mouseRef.current.y * 2,
        50,
        width * 0.5,
        height * 0.4,
        Math.max(width, height) * 0.7
      );
      grad.addColorStop(0, 'rgba(0, 102, 255, 0.07)');
      grad.addColorStop(0.5, 'rgba(0, 210, 255, 0.03)');
      grad.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Render stars with parallax
      stars.forEach((star) => {
        star.alpha += Math.sin(Date.now() * star.twinkleSpeed) * 0.015;
        const currentAlpha = Math.max(0.1, Math.min(1, star.alpha));

        const posX = star.x + mouseRef.current.x * star.depth;
        const posY = star.y + mouseRef.current.y * star.depth;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(posX, posY, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow for larger stars
        if (star.size > 1.4) {
          ctx.beginPath();
          ctx.arc(posX, posY, star.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = currentAlpha * 0.25;
          ctx.fill();
        }
      });

      // Render shooting star if active
      if (shootingStar) {
        ctx.save();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = shootingStar.alpha;

        const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
        const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;

        const starGrad = ctx.createLinearGradient(
          tailX,
          tailY,
          shootingStar.x,
          shootingStar.y
        );
        starGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        starGrad.addColorStop(0.7, 'rgba(0, 210, 255, 0.6)');
        starGrad.addColorStop(1, 'rgba(255, 255, 255, 1)');

        ctx.strokeStyle = starGrad;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(shootingStar.x, shootingStar.y);
        ctx.stroke();

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.alpha -= shootingStar.decay;

        if (shootingStar.alpha <= 0) {
          shootingStar = null;
        }
        ctx.restore();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  );
}
