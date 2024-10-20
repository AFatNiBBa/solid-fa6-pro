
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn?s=light chess-pawn}
 * @preview ![chess-pawn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chess-pawn.svg)
 */
const ChessPawn: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M240 144A80 80 0 1 0 80 144a80 80 0 1 0 160 0zm16 112l-20.6 0L254 352l-32.6 0-18.6-96L160 256l-42.8 0L98.6 352 66 352l18.6-96L64 256c-8.8 0-16-7.2-16-16s7.2-16 16-16l17.6 0C60.9 203.7 48 175.3 48 144C48 82.1 98.1 32 160 32s112 50.1 112 112c0 31.3-12.9 59.7-33.6 80l17.6 0c8.8 0 16 7.2 16 16s-7.2 16-16 16zM65.8 416L33.1 468.7c-.7 1.2-1.1 2.5-1.1 3.9c0 4.1 3.3 7.4 7.4 7.4l241.1 0c4.1 0 7.4-3.3 7.4-7.4c0-1.4-.4-2.7-1.1-3.9L254.2 416 65.8 416zm188.4-32c11.1 0 21.4 5.7 27.2 15.1l32.7 52.7c3.9 6.2 5.9 13.4 5.9 20.8c0 21.8-17.7 39.4-39.4 39.4L39.4 512C17.7 512 0 494.3 0 472.6c0-7.3 2.1-14.5 5.9-20.8l32.7-52.7c5.8-9.4 16.1-15.1 27.2-15.1l188.4 0z" />
    </Icon>
);

export default ChessPawn;