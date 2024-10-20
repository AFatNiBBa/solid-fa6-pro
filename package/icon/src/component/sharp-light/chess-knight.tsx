
import { Icon } from "../../index";

/**
 * A component that renders the `chess-knight` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight?s=sharp-light chess-knight}
 * @preview ![chess-knight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/chess-knight.svg)
 */
const ChessKnight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 0L64 0l0 16 0 32 0 9.9 8.8 4.4L85 68.4 68.7 84.7 64 89.4 64 96l-.4 159.6 0 8.3 6.7 4.8L98.9 289 71.4 306.5 64 311.2l0 8.8 0 32 32 0 0-23.2L264.6 221.5l13.5-8.6-17.2-27-13.5 8.6L128 270.5 95.6 247.4 96 102.6l27.3-27.3L139 59.6l-19.9-9.9L96 38.1 96 32l134.6 0C315.3 32 384 100.7 384 185.4c0 8.8-.8 17.6-2.3 26.3L357.3 352l32.5 0 23.5-134.9c1.8-10.5 2.7-21.1 2.7-31.8C416 83 333 0 230.6 0L80 0zM48 470.5L81.8 416l284.4 0L400 470.5l0 9.5L48 480l0-9.5zM64 384L16 461.3 16 480l0 32 32 0 352 0 32 0 0-32 0-18.7L384 384 64 384zm84-216a20 20 0 1 0 0-40 20 20 0 1 0 0 40z" />
    </Icon>
);

export default ChessKnight;