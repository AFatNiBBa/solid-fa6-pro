
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook?s=sharp-regular chess-rook}
 * @preview ![chess-rook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chess-rook.svg)
 */
const ChessRook: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32l24 0 336 0 24 0 0 24 0 152 0 12-9.6 7.2-53 39.8 9.4 85-48.3 0-10.4-93.3L302.6 245l11-8.2L368 196l0-116-64 0 0 24 0 24-48 0 0-24 0-24-64 0 0 24 0 24-48 0 0-24 0-24L80 80l0 116 54.4 40.8 11 8.2-1.5 13.6L133.5 352l-48.3 0 9.4-85-53-39.8L32 220l0-12L32 56l0-24zm69.2 400L84.7 464l278.7 0-16.6-32-245.6 0zM416 464l0 48-48 0L80 512l-48 0 0-48 0-2.7L72 384l304 0 40 77.3 0 2.7zM192 288l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64-64 0z" />
    </Icon>
);

export default ChessRook;