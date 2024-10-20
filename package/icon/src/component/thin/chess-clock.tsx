
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock?s=thin chess-clock}
 * @preview ![chess-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chess-clock.svg)
 */
const ChessClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M248 32c4.4 0 8 3.6 8 8s-3.6 8-8 8l-64 0 0 80 392 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64l104 0 0-80-64 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l72 0 72 0zM176 144L64 144c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48l512 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-400 0zM544 88c0 4.4-3.6 8-8 8L392 96c-4.4 0-8-3.6-8-8s3.6-8 8-8l144 0c4.4 0 8 3.6 8 8zM176 400a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-208a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM531.9 371.9A96 96 0 1 0 396.1 236.1 96 96 0 1 0 531.9 371.9zM384.8 224.8A112 112 0 1 1 543.2 383.2 112 112 0 1 1 384.8 224.8zM176 240c4.4 0 8 3.6 8 8l0 56c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-56c0-4.4 3.6-8 8-8zm333.3 30.1l-39.6 39.6c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l39.6-39.6c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z" />
    </Icon>
);

export default ChessClock;