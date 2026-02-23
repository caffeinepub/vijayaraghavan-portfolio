// Lightweight anime.js alternative using native Web Animations API
interface AnimeParams {
  targets: any;
  duration?: number | ((el: any, i: number, l: number) => number);
  delay?: number | ((el: any, i: number, l: number) => number);
  easing?: string;
  loop?: boolean;
  direction?: 'normal' | 'reverse' | 'alternate';
  begin?: (anim: AnimeInstance) => void;
  update?: (anim: AnimeInstance) => void;
  complete?: (anim: AnimeInstance) => void;
  [key: string]: any;
}

interface AnimeInstance {
  play(): void;
  pause(): void;
  restart(): void;
  finished: Promise<void>;
}

const easingMap: Record<string, string> = {
  'easeOutElastic(1, .8)': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  'easeOutExpo': 'cubic-bezier(0.19, 1, 0.22, 1)',
  'easeOutQuad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  'easeInOutSine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  'linear': 'linear',
};

function anime(params: AnimeParams): AnimeInstance {
  const {
    targets,
    duration = 1000,
    delay = 0,
    easing = 'linear',
    loop = false,
    direction = 'normal',
    ...properties
  } = params;

  const elements = typeof targets === 'string' 
    ? document.querySelectorAll(targets) 
    : targets instanceof NodeList || Array.isArray(targets)
    ? targets
    : [targets];

  const animations: Animation[] = [];
  const easingValue = easingMap[easing] || easing;

  Array.from(elements).forEach((el: any, index: number) => {
    if (!el) return;

    const keyframes: Keyframe[] = [];
    const fromFrame: any = {};
    const toFrame: any = {};

    Object.keys(properties).forEach((prop) => {
      if (prop === 'begin' || prop === 'update' || prop === 'complete') return;

      const value = properties[prop];
      
      if (Array.isArray(value)) {
        fromFrame[prop] = value[0];
        toFrame[prop] = value[1];
      } else if (typeof value === 'function') {
        toFrame[prop] = value(el, index, elements.length);
      } else {
        toFrame[prop] = value;
      }
    });

    keyframes.push(fromFrame, toFrame);

    const elementDelay = typeof delay === 'function' 
      ? (delay as (el: any, i: number, l: number) => number)(el, index, elements.length) 
      : delay;
    const elementDuration = typeof duration === 'function' 
      ? (duration as (el: any, i: number, l: number) => number)(el, index, elements.length) 
      : duration;

    const animation = el.animate(keyframes, {
      duration: elementDuration,
      delay: elementDelay,
      easing: easingValue,
      iterations: loop ? Infinity : 1,
      direction: direction,
      fill: 'forwards',
    });

    animations.push(animation);

    if (params.update) {
      animation.onfinish = () => params.update?.({ play: () => {}, pause: () => {}, restart: () => {}, finished: Promise.resolve() });
    }
    if (params.complete) {
      animation.onfinish = () => params.complete?.({ play: () => {}, pause: () => {}, restart: () => {}, finished: Promise.resolve() });
    }
  });

  return {
    play: () => animations.forEach(a => a.play()),
    pause: () => animations.forEach(a => a.pause()),
    restart: () => animations.forEach(a => { a.cancel(); a.play(); }),
    finished: Promise.all(animations.map(a => a.finished)).then(() => {}),
  };
}

anime.stagger = (value: number, options: any = {}) => {
  const start = options.start || 0;
  return (el: any, i: number) => start + (i * value);
};

anime.random = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export default anime;
