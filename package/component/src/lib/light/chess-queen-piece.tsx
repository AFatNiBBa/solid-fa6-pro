
import { Icon } from "../../index";

/**
 * A component that renders the `chess-queen-piece` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=light chess-queen-piece}
 * @preview ![chess-queen-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chess-queen-piece.svg)
 */
const ChessQueenPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M104 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm67.8 41.4c6.5 1.2 11.6 6.2 12.8 12.7C187.4 92.9 200.4 104 216 104c5.6 0 10.7-1.4 15.3-3.9c6.1-3.3 13.7-2.3 18.8 2.5s6.3 12.4 3.2 18.7L201.9 224l6.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-15.3 0 4.4 96-32 0-4.4-96-65.4 0-4.4 96-32 0 4.4-96L48 256c-8.8 0-16-7.2-16-16s7.2-16 16-16l6.1 0L2.8 121.3C-.3 115.1 1 107.5 6 102.7s12.6-5.9 18.8-2.5c4.5 2.5 9.7 3.9 15.3 3.9c15.6 0 28.6-11.1 31.4-25.9c1.3-6.5 6.3-11.5 12.8-12.7s13 1.7 16.5 7.3C106.4 81.9 116.5 88 128 88s21.6-6.1 27.3-15.2c3.5-5.6 10-8.5 16.5-7.3zM89.9 224l76.2 0 44.1-88.3c-19.2-1.7-35.9-11.9-46.4-26.7c-10.2 6.9-22.5 11-35.8 11s-25.6-4-35.8-11c-10.6 14.8-27.3 25-46.4 26.7L89.9 224zM190.2 384c11.1 0 21.4 5.7 27.2 15.1l32.7 52.7c3.9 6.2 5.9 13.4 5.9 20.8c0 21.8-17.7 39.4-39.4 39.4L39.4 512C17.7 512 0 494.3 0 472.6c0-7.3 2.1-14.5 5.9-20.8l32.7-52.7c5.8-9.4 16.1-15.1 27.2-15.1l124.4 0zM65.8 416L33.1 468.7c-.7 1.2-1.1 2.5-1.1 3.9c0 4.1 3.3 7.4 7.4 7.4l177.1 0c4.1 0 7.4-3.3 7.4-7.4c0-1.4-.4-2.7-1.1-3.9L190.2 416 65.8 416z" />
    </Icon>
);

export default ChessQueenPiece;