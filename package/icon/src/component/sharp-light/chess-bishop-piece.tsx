
import { Icon } from "../../index";

/**
 * A component that renders the `chess-bishop-piece` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop-piece?s=sharp-light chess-bishop-piece}
 * @preview ![chess-bishop-piece](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-bishop-piece.svg)
 */
const ChessBishopPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M80 32l16 0 32 0 32 0 16 0 0 32-6.1 0c3.4 3.6 6.9 7.5 10.4 11.8C201.4 101.1 224 138.7 224 184c0 16.2-4.2 29.4-10.3 40l10.3 0 0 32-16 0-11.9 0 9.6 96-32.2 0-9.6-96-71.8 0-9.6 96-32.2 0 9.6-96L48 256l-16 0 0-32 10.3 0C36.2 213.4 32 200.2 32 184c0-45.3 22.6-82.9 43.7-108.2c3.5-4.2 7-8.1 10.4-11.8L80 64l0-32zm91.5 192c10.2-7.5 20.5-19.8 20.5-40c0-18.9-5.2-36.6-13-52.4l-31.7 31.7L136 174.6 113.4 152l11.3-11.3 37-37c-2-2.6-3.9-5.1-5.9-7.5C146.4 85.1 137 76.2 130 70.1c-.7-.6-1.4-1.2-2-1.7c-.6 .5-1.3 1.1-2 1.7c-7 6.1-16.4 15-25.7 26.2C81.4 118.9 64 149.3 64 184c0 20.2 10.3 32.5 20.5 40l87.1 0zM32 463.3L32 480l192 0 0-16.7L191.2 416 64.8 416 32 463.3zm-32-10L48 384l160 0 48 69.3 0 26.7 0 32-32 0L32 512 0 512l0-32 0-26.7z" />
    </Icon>
);

export default ChessBishopPiece;