
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock-flip` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock-flip?s=light chess-clock-flip}
 * @preview ![chess-clock-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chess-clock-flip.svg)
 */
const ChessClockFlip: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M400 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 64L64 128c-35.3 0-64 28.7-64 64L0 416c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-96 0 0-64 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0-64 0zM96 80c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L112 64c-8.8 0-16 7.2-16 16zm480 80c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32l512 0zM464 224a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 192a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM119.4 247.4A80 80 0 1 1 232.6 360.6 80 80 0 1 1 119.4 247.4zM255.2 383.2A112 112 0 1 0 96.8 224.8 112 112 0 1 0 255.2 383.2zM464 240c-8.8 0-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48c0-8.8-7.2-16-16-16zM221.3 281.4c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l33.9-33.9z" />
    </Icon>
);

export default ChessClockFlip;