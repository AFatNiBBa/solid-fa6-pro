
import { Icon } from "../../index";

/**
 * A component that renders the `chess-queen-piece` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=solid chess-queen-piece}
 * @preview ![chess-queen-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chess-queen-piece.svg)
 */
const ChessQueenPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M104 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM229.9 124.9l-41.5 67.5c11.2 2.1 19.6 11.8 19.6 23.6c0 13.3-10.7 24-24 24l-8 0 19.6 144L60.4 384 80 240l-8 0c-13.3 0-24-10.7-24-24c0-11.8 8.5-21.5 19.6-23.6L26.1 124.9c-3.7-6-3-13.6 1.6-18.9s12.1-6.9 18.6-4.1c3 1.3 6.3 2.1 9.8 2.1c11.8 0 21.6-8.5 23.6-19.7c1.1-6.3 6-11.4 12.3-12.8s12.8 1.1 16.5 6.4C112.8 84 119.9 88 128 88s15.2-4 19.6-10.1c3.7-5.3 10.2-7.8 16.5-6.4s11.1 6.4 12.3 12.8c2 11.2 11.8 19.7 23.6 19.7c3.5 0 6.8-.7 9.8-2.1c6.4-2.9 13.9-1.2 18.6 4.1s5.3 13 1.6 18.9zM208 416l43.2 57.6c3.1 4.2 4.8 9.2 4.8 14.4c0 13.3-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24c0-5.2 1.7-10.2 4.8-14.4L48 416l160 0z" />
    </Icon>
);

export default ChessQueenPiece;