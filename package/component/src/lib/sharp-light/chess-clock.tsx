
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock?s=sharp-light chess-clock}
 * @preview ![chess-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-clock.svg)
 */
const ChessClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M240 32l16 0 0 32-16 0-48 0 0 64 416 0 32 0 0 32 0 288 0 32-32 0L32 480 0 480l0-32L0 160l0-32 32 0 128 0 0-64-48 0L96 64l0-32 16 0 64 0 64 0zM544 64l0 32-16 0L400 96l-16 0 0-32 16 0 128 0 16 0zM32 160l0 288 576 0 0-288L32 160zM176 384a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM520.6 360.6A80 80 0 1 0 407.4 247.4 80 80 0 1 0 520.6 360.6zM384.8 224.8A112 112 0 1 1 543.2 383.2 112 112 0 1 1 384.8 224.8zM160 240l32 0 0 16 0 48 0 16-32 0 0-16 0-48 0-16zm349.3 41.4l-33.9 33.9L464 326.6 441.4 304l11.3-11.3 33.9-33.9 11.3-11.3 22.6 22.6-11.3 11.3z" />
    </Icon>
);

export default ChessClock;