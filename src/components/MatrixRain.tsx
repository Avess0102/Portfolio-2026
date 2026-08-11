import { useEffect, useRef } from 'react';

const CHARS =
  'アイウエhオカキクHコサシスセソタチツEトナニヌネノハMマRムメモヤユEラリルレロワヲン01234I6789:;.=*+-<>/\\{}[]#$%';

const BASE_COLOR = "green";
const ACCENT_COLOR = "olive";
const BRIGHT_COLOR = "honeydew";
const FONT_SIZE = 16;

export default function MatrixRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    container.appendChild(canvas);

    let columns = 0;
    let drops: number[] = [];
    let columnStyle: ('base' | 'accent')[] = [];

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const width = container.clientWidth;
      const height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.ceil(width / FONT_SIZE);
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * (height / FONT_SIZE)));
      columnStyle = Array.from({ length: columns }, () => (Math.random() < 0.1 ? 'accent' : 'base'));

      // Prime the canvas with the page's dark base so the fade trail has something to fade into.
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, width, height);
    };

    setup();
    ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;
    ctx.textBaseline = 'top';

    const drawFrame = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      ctx.fillStyle = 'rgba(10, 10, 10, 0.075)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < columns; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        // Rare bright "spark" head, otherwise the column's assigned base/accent tone.
        ctx.fillStyle = Math.random() < 0.04 ? BRIGHT_COLOR : columnStyle[i] === 'accent' ? ACCENT_COLOR : BASE_COLOR;
        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }
    };

    let frameId = 0;
    let lastDraw = 0;
    const FRAME_INTERVAL = 55; // throttle to ~18fps, plenty smooth for falling glyphs

    const loop = (timestamp: number) => {
      if (timestamp - lastDraw >= FRAME_INTERVAL) {
        drawFrame();
        lastDraw = timestamp;
      }
      frameId = requestAnimationFrame(loop);
    };

    const stop = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = 0;
    };

    if (prefersReducedMotion) {
      drawFrame();
    } else {
      frameId = requestAnimationFrame(loop);
    }

    const handleResize = () => {
      setup();
      if (prefersReducedMotion) drawFrame();
    };
    window.addEventListener('resize', handleResize);

    const handleVisibilityChange = () => {
      if (prefersReducedMotion) return;
      if (document.hidden) {
        stop();
      } else if (!frameId) {
        frameId = requestAnimationFrame(loop);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      container.removeChild(canvas);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="site-matrix-rain"
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none opacity-50"
    />
  );
}
