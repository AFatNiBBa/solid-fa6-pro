
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn?s=sharp-light chess-pawn}
 * @preview ![chess-pawn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-pawn.svg)
 */
const ChessPawn: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M240 144A80 80 0 1 0 80 144a80 80 0 1 0 160 0zm16 112l-20.6 0L254 352l-32.6 0-18.6-96L160 256l-42.8 0L98.6 352 66 352l18.6-96L64 256l-16 0 0-32 16 0 17.6 0C60.9 203.7 48 175.3 48 144C48 82.1 98.1 32 160 32s112 50.1 112 112c0 31.3-12.9 59.7-33.6 80l17.6 0 16 0 0 32-16 0zM32 480l256 0 0-9.5L254.2 416 65.8 416 32 470.5l0 9.5zm240-96l48 77.3 0 18.7 0 32-32 0L32 512 0 512l0-32 0-18.7L48 384l224 0z" />
    </Icon>
);

export default ChessPawn;