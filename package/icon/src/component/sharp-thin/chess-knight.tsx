
import { Icon } from "../../index";

/**
 * A component that renders the `chess-knight` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight?s=sharp-thin chess-knight}
 * @preview ![chess-knight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chess-knight.svg)
 */
const ChessKnight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 0l8 0L234.6 0C334.8 0 416 81.2 416 181.4c0 10.2-.9 20.4-2.6 30.4L383.9 385.3l-15.8-2.7 29.5-173.6c1.6-9.2 2.3-18.4 2.3-27.7C400 90 326 16 234.6 16L80 16l0 19.1 27.6 13.8 9.9 5-7.8 7.8L80 91.3l-.4 152.1 51.5 36.8 112-86.6 6.3-4.9 9.8 12.7-6.3 4.9L80 339.9l0 2.6L80 368l0 16-16 0 0-16 0-25.4 0-5.1 0-1.1 0-.3c0 0 0 0 0-.1c0 0 0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0l0-3.9 3.1-2.4 50.7-39.2L66.9 254.1l-3.4-2.4 0-4.1L64 88l0-3.3 2.3-2.3L90.5 58.2l-22.1-11L64 44.9 64 40 64 8l0-8zm64 144a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM32 496l384 0 0-25.4L377.4 432 70.6 432 32 470.6 32 496zm-16 0l0-32 48-48 320 0 48 48 0 32 0 16-16 0L32 512l-16 0 0-16z" />
    </Icon>
);

export default ChessKnight;