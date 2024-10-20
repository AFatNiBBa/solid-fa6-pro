
import { Icon } from "../../index";

/**
 * A component that renders the `chess-bishop` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop?s=sharp-light chess-bishop}
 * @preview ![chess-bishop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-bishop.svg)
 */
const ChessBishop: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M104 0L88 0l0 32 16 0 11.6 0C103.6 42.9 89.8 56.7 75.9 72.8C39 115.7 0 177.6 0 248.7c0 53.2 37.2 80 64 92.3L64 352l32 0 0-21.6 0-11.1-10.4-3.9C62.5 306.8 32 288.1 32 248.7c0-59.7 33-114.3 68.1-155c17.4-20.2 34.7-36.4 47.8-47.6c4.7-4 8.8-7.3 12.1-10c3.3 2.6 7.4 6 12.1 10c13.1 11.2 30.4 27.5 47.8 47.6c7.2 8.4 14.3 17.3 21.1 26.7l-76.2 76.2L153.4 208 176 230.6l11.3-11.3L258.6 148c17.3 30.4 29.4 64.6 29.4 100.7c0 39.4-30.5 58-53.6 66.7L224 319.3l0 11.1 0 21.6 32 0 0-10.9c26.8-12.3 64-39.1 64-92.3c0-71.2-39-133-75.9-175.9C230.2 56.7 216.4 42.9 204.4 32L216 32l16 0 0-32L216 0 104 0zM32 480l0-9.5L65.8 416l188.4 0L288 470.5l0 9.5L32 480zm240-96L48 384 0 461.3 0 480l0 32 32 0 256 0 32 0 0-32 0-18.7L272 384z" />
    </Icon>
);

export default ChessBishop;