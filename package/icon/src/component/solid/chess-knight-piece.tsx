
import { Icon } from "../../index";

/**
 * A component that renders the `chess-knight-piece` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight-piece?s=solid chess-knight-piece}
 * @preview ![chess-knight-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chess-knight-piece.svg)
 */
const ChessKnightPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M57.6 102.4l-6.9 6.9c-12 12-18.7 28.3-18.7 45.3l0 81.2c0 10.7 5.3 20.7 14.2 26.6l3.5 2.4c12.7 8.5 29.1 9.5 42.8 2.7c2.3-1.1 4.5-2.5 6.5-4l38.8-29.1c5.5-4.1 13.1-4.1 18.6 0c8.2 6.1 8.3 18.4 .2 24.7L81 317c-20.8 16-33 40.7-33 67l224 0 26.9-107.6c3.4-13.6 5.1-27.5 5.1-41.5c0-94.4-76.5-171-171-171L47.8 64C39.1 64 32 71.1 32 79.8c0 6 3.4 11.5 8.7 14.2l16.9 8.4zm19.2 54.4a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L272 416 48 416z" />
    </Icon>
);

export default ChessKnightPiece;