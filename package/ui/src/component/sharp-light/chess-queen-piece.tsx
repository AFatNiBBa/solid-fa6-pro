
import { Icon } from "../../index";

/**
 * A component that renders the `chess-queen-piece` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=sharp-light chess-queen-piece}
 * @preview ![chess-queen-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-queen-piece.svg)
 */
const ChessQueenPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M152 24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM48 224l-16 0 0 32 16 0 13.9 0-8.3 96 32.1 0L94 256l67.9 0 8.3 96 32.1 0-8.3-96 13.9 0 16 0 0-32-16 0-12.2 0 56.1-118 2-4.3 2-4.3L232 80.7c-1.2 1.3-2.4 2.4-3.7 3.5c-.8 .7-1.6 1.3-2.3 1.9C207.2 100.4 184 96.5 184 64l-32 0c0 32.4-48 32.4-48 0L72 64c0 32.5-23.2 36.4-41.9 22.2c-.8-.6-1.6-1.2-2.3-1.9c-1.3-1.1-2.5-2.3-3.7-3.5L0 97.4l2 4.3 2 4.3L60.2 224 48 224zm47.6 0l-2.7-5.7L49 126c4.4 .1 8.8-.3 13.3-1.3c11.3-2.6 21.2-8.8 28.5-18c10.9 9.5 24.5 13.6 37.2 13.6s26.2-4.1 37.2-13.6c7.3 9.2 17.2 15.4 28.5 18c4.5 1 9 1.4 13.3 1.3l-43.9 92.3-2.7 5.7-64.7 0zM32 480l0-16.7L64.8 416l126.5 0L224 463.3l0 16.7L32 480zM0 480l0 32 32 0 192 0 32 0 0-32 0-26.7L208 384 48 384 0 453.3 0 480z" />
    </Icon>
);

export default ChessQueenPiece;