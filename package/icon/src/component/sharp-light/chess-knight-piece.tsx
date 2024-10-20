
import { Icon } from "../../index";

/**
 * A component that renders the `chess-knight-piece` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight-piece?s=sharp-light chess-knight-piece}
 * @preview ![chess-knight-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-knight-piece.svg)
 */
const ChessKnightPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M53.3 96l80.4 0C210.1 96 272 157.9 272 234.3c0 12.7-1.7 25.3-5.2 37.5L244.3 352l33.2 0 20.1-71.5c4.2-15 6.4-30.6 6.4-46.2C304 140.3 227.7 64 133.7 64L32.4 64l-16 0 0 16 0 18.7 0 7.1 5.3 4.8 11.9 10.7L20.4 136.1l-4 4.5 0 6-.4 109 0 10.5 9.7 4.2 36.2 15.7-6.9 4.8L48 295.6l0 8.4 0 48 32 0 0-39.6 97.1-67.2 13.2-9.1L172 209.7l-13.2 9.1L92.8 264.6 48 245.2l.3-92.4L68 130.6l10.5-11.9L66.7 108.1 53.3 96zM96 192a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM32 480l0-16.7L64.8 416l190.5 0L288 463.3l0 16.7L32 480zM0 480l0 32 32 0 256 0 32 0 0-32 0-26.7L272 384 48 384 0 453.3 0 480z" />
    </Icon>
);

export default ChessKnightPiece;