
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock-flip` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock-flip?s=thin chess-clock-flip}
 * @preview ![chess-clock-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chess-clock-flip.svg)
 */
const ChessClockFlip: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M392 32c-4.4 0-8 3.6-8 8s3.6 8 8 8l64 0 0 80L64 128c-35.3 0-64 28.7-64 64L0 416c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-104 0 0-80 64 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-72 0-72 0zm72 112l112 0c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l400 0zM96 88c0 4.4 3.6 8 8 8l144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L104 80c-4.4 0-8 3.6-8 8zM464 208a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 208a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM108.1 236.1A96 96 0 1 1 243.9 371.9 96 96 0 1 1 108.1 236.1zM255.2 383.2A112 112 0 1 0 96.8 224.8 112 112 0 1 0 255.2 383.2zM464 240c-4.4 0-8 3.6-8 8l0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56c0-4.4-3.6-8-8-8zM221.3 270.1c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-39.6 39.6c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l39.6-39.6z" />
    </Icon>
);

export default ChessClockFlip;