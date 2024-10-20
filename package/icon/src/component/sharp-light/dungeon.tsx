
import { Icon } from "../../index";

/**
 * A component that renders the `dungeon` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dungeon?s=sharp-light dungeon}
 * @preview ![dungeon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dungeon.svg)
 */
const Dungeon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 256l-80 0c0-38.7 9.8-75 27-106.8l67 44.7c-9 18.8-14 39.9-14 62.1zm74.7-126.2c-16.9 9.3-31.8 21.9-43.7 37L76.3 122.3C97.3 94 124.9 70.9 156.8 55.1l29.9 74.7zm29.6-12.2L186.4 43c21.9-7.1 45.3-11 69.6-11s47.7 3.9 69.6 11l-29.8 74.5c-12.6-3.6-26-5.6-39.7-5.6s-27.1 1.9-39.7 5.6zm109.1 12.2l29.9-74.7c31.9 15.8 59.5 38.9 80.5 67.2L369 166.8c-11.9-15.1-26.8-27.7-43.7-37zM386 193.9l67-44.7c17.2 31.7 27 68.1 27 106.8l-80 0c0-22.2-5-43.3-14-62.1zM480 288l0 80-80 0 0-80 80 0zM400 480l0-80 80 0 0 80-80 0zM112 288l0 80-80 0 0-80 80 0zM32 480l0-80 80 0 0 80-80 0zm112 0l0-224c0-61.9 50.1-112 112-112s112 50.1 112 112l0 224 0 32 32 0 80 0 32 0 0-32 0-224C512 114.6 397.4 0 256 0S0 114.6 0 256L0 480l0 32 32 0 80 0 32 0 0-32zM272 192l0-16-32 0 0 16 0 272 0 16 32 0 0-16 0-272zm-64 32l0-16-32 0 0 16 0 240 0 16 32 0 0-16 0-240zm128 0l0-16-32 0 0 16 0 240 0 16 32 0 0-16 0-240z" />
    </Icon>
);

export default Dungeon;