
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-pawn` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn?s=sharp-duotone-solid chess-pawn}
 * @preview ![chess-pawn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chess-pawn.svg)
 */
const ChessPawn: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M16 480l48-48 192 0 48 48 0 32L16 512l0-32z" />
        <path d="M264 136c0 37.1-19.4 69.6-48.5 88l8.5 0 32 0 0 64-26.2 0L256 432 64 432 90.2 288 64 288l0-64 32 0 8.5 0C75.4 205.6 56 173.1 56 136C56 78.6 102.6 32 160 32s104 46.6 104 104z" />
    </Icon>
);

export default ChessPawn;