
import { Icon } from "../../index";

/**
 * A component that renders the `chess-knight-piece` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight-piece?s=sharp-regular chess-knight-piece}
 * @preview ![chess-knight-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-knight-piece.svg)
 */
const ChessKnightPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M53.9 112l94.8 0C216.8 112 272 167.2 272 235.3c0 11.3-1.6 22.5-4.6 33.4L244 352l49.9 0 19.8-70.3c4.3-15.1 6.4-30.7 6.4-46.4C320 140.7 243.3 64 148.7 64L24.4 64 .4 64l0 24 0 26.7 0 9 5.9 6.8 3.9 4.4-2.8 2.8-7 7 0 9.9L0 255.6 0 265 6.4 272l25.5 27.5 .1 12.7 .3 39.8 48 0-.2-25.7 91.3-49.1 21.1-11.4-22.8-42.3-21.1 11.4L74.5 274.8 48.1 246.3l.3-81.6L60 153l15.9-15.9L61.1 120.2 53.9 112zM96 192a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM69.2 432l181.6 0 16.6 32L52.7 464l16.6-32zM320 464l0-2.7L280 384 40 384 0 461.3 0 464l0 48 48 0 224 0 48 0 0-48z" />
    </Icon>
);

export default ChessKnightPiece;