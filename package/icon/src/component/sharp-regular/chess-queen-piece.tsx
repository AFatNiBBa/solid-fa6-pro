
import { Icon } from "../../index";

/**
 * A component that renders the `chess-queen-piece` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=sharp-regular chess-queen-piece}
 * @preview ![chess-queen-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-queen-piece.svg)
 */
const ChessQueenPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M128 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM40 208l-24 0 0 48 24 0 14.7 0-4 96 48 0 4-96 50.6 0 4 96 48 0-4-96 14.7 0 24 0 0-48-24 0-8.9 0L240 133.6l14.1-31.8 1.9-4.4L232 80.7c-1.4 1.5-2.9 2.9-4.4 4.1c-7.3 6-15.3 9.3-22.5 9.1c-3.6-.1-7-1-10-2.9C188.5 87 184 78.2 184 64l-32 0c0 11.4-5.9 18.8-13.6 22.1c-6.5 2.8-14.2 2.8-20.7 0C109.9 82.8 104 75.4 104 64L72 64c0 14.2-4.5 23-11 27.1C58 93 54.6 93.9 51 94c-7.2 .1-15.3-3.1-22.5-9.1c-1.5-1.3-3-2.6-4.4-4.1L0 97.4l1.9 4.4L16 133.6 48.9 208 40 208zm116.1-3.4l-1.5 3.4-53.2 0-1.5-3.4-29-65.6c8-2.5 15.4-6.4 21.9-11.6c11.3 6.2 23.7 8.9 35.3 8.9s24-2.7 35.3-8.9c6.5 5.2 13.8 9.1 21.9 11.6l-29 65.6zM53.8 464l17.8-32 112.9 0 17.8 32L53.8 464zM256 461.9L212.7 384 43.3 384 0 461.9 0 464l0 48 48 0 160 0 48 0 0-48 0-2.1z" />
    </Icon>
);

export default ChessQueenPiece;