
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-knight` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight?s=duotone chess-knight}
 * @preview ![chess-knight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chess-knight.svg)
 */
const ChessKnight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 489.4C16 501.9 26.1 512 38.6 512l370.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432 64 432 22.6 473.4c-4.2 4.2-6.6 10-6.6 16z" />
        <path d="M82.7 61.3L96 48 74.9 37.5C68.2 34.1 64 27.3 64 19.8C64 8.9 72.9 0 83.8 0L224 0C330 0 416 86 416 192l0 17.3c0 9.8-.7 19.5-2.2 29.2L384 432 64 432l0-13.3c0-31.7 15.7-61.4 41.9-79.3l112.6-76.8c10.5-7.2 10.9-22.6 .7-30.3c-6.6-5-15.7-5-22.3 0l-49.4 37c-2.3 1.7-4.8 3.2-7.3 4.5l-3.2 1.6c-15.4 7.7-33.8 6.6-48.1-3l-10.6-7C69.3 259.6 64 249.6 64 238.9l0-132.4c0-17 6.7-33.3 18.7-45.3zM140 136a20 20 0 1 0 0-40 20 20 0 1 0 0 40z" />
    </Icon>
);

export default ChessKnight;