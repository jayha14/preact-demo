import './app.css';
import Marquee, { MarqueeProps } from './components/Carousel';

// type CustomEvents<K extends string> = { [key in K] : (event: CustomEvent) => void };
// type CustomElement<T, K extends string = ''> = Partial<T & { children: any } & CustomEvents<`on${K}`>>;

declare global {
  namespace preact.createElement.JSX {
    // import HTMLAttributes = JSXInternal.HTMLAttributes;

    interface IntrinsicElements {
      'x-marquee': MarqueeProps;
    }
  }
}
export function App() {
  return (
    <x-marquee>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>3</div>
    </x-marquee>
  );
}
