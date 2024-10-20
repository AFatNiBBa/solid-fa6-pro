
import { Icon } from "../../index";

/**
 * A component that renders the `chess-knight-piece` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight-piece?s=sharp-thin chess-knight-piece}
 * @preview ![chess-knight-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chess-knight-piece.svg)
 */
const ChessKnightPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M283.9 237.2c2.2-86.1-67.2-157-153.3-156.8l-98.2 .2 0 8.2 22.4 20.2 5.9 5.3-5.3 5.9-23 26L32 261.4l43 19.2 88.3-63.1 6.5-4.6 9.3 13-6.5 4.6L64 308.1l-.3 76-16 0L48 304l0-4.1 3.3-2.4 8.6-6.1L20.7 273.9 16 271.8l0-5.2 .4-123.4 0-3 2-2.3 19.8-22.3L19 98.4 16.4 96l0-3.6 0-19.8 0-8 8 0 106.1-.3c95.2-.2 171.7 78.1 169.4 173.2c-.3 12.9-2.1 25.8-5.4 38.3L266.3 384.1l-16.5 0L279 272c3-11.3 4.6-23 4.9-34.7zM84 160a12 12 0 1 1 0 24 12 12 0 1 1 0-24zM48 416l224 0 3.7 0 2.4 2.9 40 48 1.9 2.2 0 2.9 0 32 0 8-8 0L8 512l-8 0 0-8 0-32 0-2.9 1.9-2.2 40-48 2.4-2.9 3.7 0zM16 474.9L16 496l288 0 0-21.1L268.3 432 51.7 432 16 474.9z" />
    </Icon>
);

export default ChessKnightPiece;