
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook?s=sharp-thin chess-rook}
 * @preview ![chess-rook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chess-rook.svg)
 */
const ChessRook: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M40 32l-8 0 0 8 0 160 0 3.3 2.3 2.3 53.5 53.5L80.9 384l16 0L104 256.4l.2-3.6-2.5-2.5L48 196.7 48 48l64 0 0 48 0 8 8 0 64 0 8 0 0-8 0-48 64 0 0 48 0 8 8 0 64 0 8 0 0-8 0-48 64 0 0 148.7-53.7 53.7-2.5 2.5 .2 3.6L351.1 384l16 0-6.9-124.9 53.5-53.5 2.3-2.3 0-3.3 0-160 0-8-8 0-80 0-8 0 0 8 0 48-48 0 0-48 0-8-8 0-80 0-8 0 0 8 0 48-48 0 0-48 0-8-8 0L40 32zM184 216l0 64 0 8 8 0 64 0 8 0 0-8 0-64c0-22.1-17.9-40-40-40s-40 17.9-40 40zm40-24c13.3 0 24 10.7 24 24l0 56-48 0 0-56c0-13.3 10.7-24 24-24zM48 496l0-20.5L87.1 432l273.7 0L400 475.5l0 20.5L48 496zm-16 0l0 16 16 0 352 0 16 0 0-16 0-26.7L368 416 80 416 32 469.3 32 496z" />
    </Icon>
);

export default ChessRook;