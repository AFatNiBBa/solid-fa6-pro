
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn?s=solid chess-pawn}
 * @preview ![chess-pawn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chess-pawn.svg)
 */
const ChessPawn: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88L96 224c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400l160 0L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32l-8.5 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512l242.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432 64 432 22.6 473.4z" />
    </Icon>
);

export default ChessPawn;