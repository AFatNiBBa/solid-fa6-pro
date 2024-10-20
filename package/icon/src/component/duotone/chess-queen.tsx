
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-queen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen?s=duotone chess-queen}
 * @preview ![chess-queen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chess-queen.svg)
 */
const ChessQueen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 489.4C64 501.9 74.1 512 86.6 512l338.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L400 432l-.4 0L384 432l-38.4 0-179.2 0L128 432l-15.6 0-.4 0L70.6 473.4c-4.2 4.2-6.6 10-6.6 16z" />
        <path d="M312 56A56 56 0 1 0 200 56a56 56 0 1 0 112 0zM164.3 120c-15.3 0-27 10.8-30.2 23.8c-7 27.8-32.2 48.3-62.1 48.3c-10.8 0-20.9-2.7-29.8-7.3c-8.4-4.4-19-4.5-27.7 .9C2.1 193.3-2.4 209.2 4.3 222.2L112.4 432l15.6 0 38.4 0 179.2 0 38.4 0 15.6 0L507.7 222.2c6.7-13 2.2-28.9-10.2-36.5c-8.7-5.4-19.3-5.4-27.7-.9c-8.9 4.7-19 7.3-29.8 7.3c-29.9 0-55.1-20.5-62.1-48.3c-3.3-13-15-23.8-30.2-23.8c-12.3 0-22.6 7.2-27.7 17c-12 23.2-36.2 39-64 39s-52-15.8-64-39c-5.1-9.8-15.4-17-27.7-17zM256 224s0 0 0 0s0 0 0 0s0 0 0 0z" />
    </Icon>
);

export default ChessQueen;