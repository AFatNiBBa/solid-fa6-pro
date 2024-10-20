
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock-flip` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock-flip?s=regular chess-clock-flip}
 * @preview ![chess-clock-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chess-clock-flip.svg)
 */
const ChessClockFlip: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 56c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32 88 0c35.3 0 64 28.7 64 64l0 240c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 176c0-35.3 28.7-64 64-64l32 0 0-16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16l0 16 184 0 0-32-32 0c-13.3 0-24-10.7-24-24zM64 160c-8.8 0-16 7.2-16 16l0 240c0 8.8 7.2 16 16 16l512 0c8.8 0 16-7.2 16-16l0-240c0-8.8-7.2-16-16-16L64 160zm376 32a104 104 0 1 1 0 208 104 104 0 1 1 0-208zm16 48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48zM126.5 222.5A104 104 0 1 1 273.5 369.5 104 104 0 1 1 126.5 222.5zm124.5 22.6c-6.2-6.2-16.4-6.2-22.6 0L194.3 279c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l33.9-33.9c6.2-6.2 6.2-16.4 0-22.6z" />
    </Icon>
);

export default ChessClockFlip;