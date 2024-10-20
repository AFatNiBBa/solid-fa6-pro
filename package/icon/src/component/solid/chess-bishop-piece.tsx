
import { Icon } from "../../index";

/**
 * A component that renders the `chess-bishop-piece` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop-piece?s=solid chess-bishop-piece}
 * @preview ![chess-bishop-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chess-bishop-piece.svg)
 */
const ChessBishopPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M104 32C90.7 32 80 42.7 80 56c0 12.2 9.1 22.3 20.9 23.8C79.6 100.1 48 139 48 192c0 26.3 13.6 40.5 26.3 48L72 240c-13.3 0-24 10.7-24 24s10.7 24 24 24l5.7 0L64 384l128 0-13.7-96 5.7 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-2.3 0c12.7-7.5 26.3-21.7 26.3-48c0-22.5-5.7-42.4-13.9-59.5l-38.8 38.8c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L177 104.4c-7.4-10-15.2-18.2-21.9-24.6C166.9 78.3 176 68.2 176 56c0-13.3-10.7-24-24-24l-48 0zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416 48 416z" />
    </Icon>
);

export default ChessBishopPiece;