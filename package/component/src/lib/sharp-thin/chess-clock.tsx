
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock?s=sharp-thin chess-clock}
 * @preview ![chess-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chess-clock.svg)
 */
const ChessClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M248 32l8 0 0 16-8 0-64 0 0 80 440 0 16 0 0 16 0 320 0 16-16 0L16 480 0 480l0-16L0 144l0-16 16 0 152 0 0-80-64 0-8 0 0-16 8 0 72 0 72 0zM184 144l-16 0L16 144l0 320 608 0 0-320-440 0zM544 80l0 16-8 0L392 96l-8 0 0-16 8 0 144 0 8 0zM176 400a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-208a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM531.9 371.9A96 96 0 1 0 396.1 236.1 96 96 0 1 0 531.9 371.9zM384.8 224.8A112 112 0 1 1 543.2 383.2 112 112 0 1 1 384.8 224.8zM168 240l16 0 0 8 0 56 0 8-16 0 0-8 0-56 0-8zm341.3 30.1l-39.6 39.6-5.7 5.7L452.7 304l5.7-5.7 39.6-39.6 5.7-5.7 11.3 11.3-5.7 5.7z" />
    </Icon>
);

export default ChessClock;