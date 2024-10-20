
import { Icon } from "../../index";

/**
 * A component that renders the `chess-king-piece` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king-piece?s=light chess-king-piece}
 * @preview ![chess-king-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chess-king-piece.svg)
 */
const ChessKingPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16L96 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 32L52.6 96C41.2 96 32 105.2 32 116.6c0 2.2 .4 4.4 1.1 6.5L66.7 224 56 224c-8.8 0-16 7.2-16 16s7.2 16 16 16l13.8 0L56.7 352 89 352l13.1-96 51.8 0L167 352l32.3 0-13.1-96 13.8 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-10.7 0 33.6-100.8c.7-2.1 1.1-4.3 1.1-6.5c0-11.4-9.2-20.6-20.6-20.6L144 96l0-32 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16zm11.6 208l-55.2 0-32-96 59.6 0 59.6 0-32 96zm34.6 160L65.8 384c-11.1 0-21.4 5.7-27.2 15.1L5.9 451.8C2.1 458 0 465.2 0 472.6C0 494.3 17.7 512 39.4 512l177.1 0c21.8 0 39.4-17.7 39.4-39.4c0-7.3-2.1-14.5-5.9-20.8l-32.7-52.7c-5.8-9.4-16.1-15.1-27.2-15.1zM33.1 468.7L65.8 416l124.4 0 32.7 52.7c.7 1.2 1.1 2.5 1.1 3.9c0 4.1-3.3 7.4-7.4 7.4L39.4 480c-4.1 0-7.4-3.3-7.4-7.4c0-1.4 .4-2.7 1.1-3.9z" />
    </Icon>
);

export default ChessKingPiece;