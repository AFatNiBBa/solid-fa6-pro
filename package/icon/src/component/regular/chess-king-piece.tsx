
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king-piece` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king-piece?s=regular chess-king-piece}
 * @preview ![chess-king-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chess-king-piece.svg)
 */
const ChessKingPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16L96 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 32L66.9 96C43.2 96 24 115.2 24 138.9c0 4.7 .8 9.4 2.3 13.8l19.6 57.5C37.7 214.1 32 222.4 32 232c0 11.6 8.2 21.3 19.2 23.5L49.1 352l48 0 2.1-96 57.6 0 2.1 96 48 0-2.1-96.5c10.9-2.2 19.2-11.9 19.2-23.5c0-9.6-5.7-17.9-13.9-21.8l19.6-57.5c1.5-4.5 2.3-9.1 2.3-13.8c0-23.7-19.2-42.9-42.9-42.9L144 96l0-32 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16zm16.2 192l-64.4 0L74 144l108 0-21.8 64zm-91 224l117.6 0 16.6 32L52.7 464l16.6-32zm-9.7-48c-12 0-22.9 6.7-28.4 17.3L4.6 452.5c-3 5.8-4.6 12.2-4.6 18.7C0 493.8 18.2 512 40.8 512l174.5 0c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2c-5.5-10.6-16.5-17.3-28.4-17.3l-137 0z" />
    </Icon>
);

export default ChessKingPiece;