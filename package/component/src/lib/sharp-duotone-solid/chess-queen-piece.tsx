
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-queen-piece` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=sharp-duotone-solid chess-queen-piece}
 * @preview ![chess-queen-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-queen-piece.svg)
 */
const ChessQueenPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 480l0 32 256 0 0-32-48-64L48 416 0 480z" />
        <path d="M104 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM48 192l18.5 0L16 92 37 78l4.6 4.6c6 6 14.5 10.3 22.3 7.1C75 85.2 79 74.6 79 64l28 0s0 21 21 21s21-21 21-21l28 0c0 10.6 4 21.2 15 25.7c7.8 3.2 16.3-1.1 22.3-7.1L219 78l21 14L189.5 192l18.5 0 0 48-23 0 23 176L48 416 71 240l-23 0 0-48z" />
    </Icon>
);

export default ChessQueenPiece;