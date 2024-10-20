
import { Icon } from "../../index";

/**
 * A component that renders the `chess-queen-piece` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=regular chess-queen-piece}
 * @preview ![chess-queen-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chess-queen-piece.svg)
 */
const ChessQueenPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M104 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM16 232c0-13.3 10.7-24 24-24l5.1 0L3.6 140.6c-6.4-10.4-4-24 5.7-31.5l2.5-1.9c6.1-4.7 14.1-6.3 21.5-4.1c2.1 .6 4.4 1 6.8 1c11.7 0 21.4-8.3 23.6-19.4c1.9-9.7 9.5-17.3 19.2-19s19.5 2.6 24.7 11C111.8 83.5 119.4 88 128 88s16.2-4.5 20.5-11.4c5.2-8.4 15-12.8 24.7-11s17.4 9.3 19.2 19c2.1 11 11.9 19.4 23.6 19.4c2.4 0 4.7-.3 6.8-1c7.4-2.2 15.4-.6 21.5 4.1l2.5 1.9c9.7 7.5 12.1 21.1 5.7 31.5L211 208l5 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-15.2 0 4.4 96-48 0-4.4-96-49.4 0-4.4 96-48 0 4.4-96L40 256c-13.3 0-24-10.7-24-24zm138.6-24l37.1-60.2c-11.6-4.2-21.8-11.2-29.7-20.3c-10.1 5.4-21.6 8.5-33.9 8.5s-23.8-3.1-33.9-8.5c-8 9.1-18.2 16.1-29.7 20.3L101.4 208l53.2 0zM52.7 464l150.7 0-16.6-32L69.2 432 52.7 464zm143.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8L40.8 512C18.2 512 0 493.8 0 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C36.5 390.7 47.5 384 59.5 384l137 0z" />
    </Icon>
);

export default ChessQueenPiece;