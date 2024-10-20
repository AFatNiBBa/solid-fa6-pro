
import { Icon } from "../../index";

/**
 * A component that renders the `chess-rook-piece` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-rook-piece?s=regular chess-rook-piece}
 * @preview ![chess-rook-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chess-rook-piece.svg)
 */
const ChessRookPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 120c0-13.3 10.7-24 24-24l240 0c13.3 0 24 10.7 24 24l0 104c0 5.6-2 11.1-5.6 15.4l-33.9 40.7 4.2 71.9-48.1 0L216 273.4c-.4-6.1 1.6-12.1 5.5-16.8L256 215.3l0-71.3-40 0 0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16-48 0 0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16-40 0 0 71.3 34.4 41.3c3.9 4.7 5.9 10.7 5.5 16.8L99.3 352l-48.1 0 4.2-71.9L21.6 239.4C18 235.1 16 229.6 16 224l0-104zM136 280.9l0-32.9c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32.9c0 3.9-3.2 7.1-7.1 7.1l-33.8 0c-3.9 0-7.1-3.2-7.1-7.1zM52.7 464l214.7 0-16.6-32L69.2 432 52.7 464zm207.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8L40.8 512C18.2 512 0 493.8 0 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2C36.5 390.7 47.5 384 59.5 384l201 0z" />
    </Icon>
);

export default ChessRookPiece;