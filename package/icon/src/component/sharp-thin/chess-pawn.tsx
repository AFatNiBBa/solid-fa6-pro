
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn?s=sharp-thin chess-pawn}
 * @preview ![chess-pawn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chess-pawn.svg)
 */
const ChessPawn: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M256 144A96 96 0 1 0 64 144a96 96 0 1 0 192 0zm16 0c0 40.7-21.8 76.4-54.3 96l4.9 0 33.4 0 8 0 0 16-8 0-30.3 0 24.8 128-16.3 0L209.4 256 160 256l-49.4 0L85.8 384l-16.3 0L94.3 256 64 256l-8 0 0-16 8 0 33.4 0 4.9 0C69.8 220.4 48 184.7 48 144C48 82.1 98.1 32 160 32s112 50.1 112 112zM16 496l288 0 0-20.5L264.9 432 55.1 432 16 475.5 16 496zM0 496l0-26.7L48 416l224 0 48 53.3 0 26.7 0 16-16 0L16 512 0 512l0-16z" />
    </Icon>
);

export default ChessPawn;