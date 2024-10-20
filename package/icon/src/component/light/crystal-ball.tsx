
import { Icon } from "../../index";

/**
 * A component that renders the `crystal-ball` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crystal-ball?s=light crystal-ball}
 * @preview ![crystal-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/crystal-ball.svg)
 */
const CrystalBall: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 224c0 49.2-18.5 94-48.9 128l40.7 0c25.3-36.3 40.2-80.4 40.2-128C448 100.3 347.7 0 224 0S0 100.3 0 224c0 47.6 14.8 91.7 40.2 128l40.7 0C50.5 318 32 273.2 32 224C32 118 118 32 224 32s192 86 192 192zM64 384c-5.6 0-10.8 2.9-13.7 7.8l-46.2 77C1.4 473.2 0 478.3 0 483.5C0 499.2 12.8 512 28.5 512l390.9 0c15.8 0 28.5-12.8 28.5-28.5c0-5.2-1.4-10.2-4.1-14.7l-46.2-77c-2.9-4.8-8.1-7.8-13.7-7.8L64 384zM34.7 480l38.4-64 301.9 0 38.4 64L34.7 480zM288 144c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16zM144 96c-8.8 0-16 7.2-16 16l0 16-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default CrystalBall;