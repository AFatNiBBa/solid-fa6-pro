
import { Icon } from "../../index";

/**
 * A component that renders the `dungeon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dungeon?s=sharp-solid dungeon}
 * @preview ![dungeon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dungeon.svg)
 */
const Dungeon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M355.7 175.7l106.7-71.2C437.7 70.9 405 43.6 367.1 25.3L319.3 144.7c14 8 26.3 18.5 36.3 30.9zm-65.9-43.2L337.5 13.2C311.9 4.7 284.5 0 256 0s-55.9 4.7-81.5 13.2l47.7 119.3c10.8-2.9 22.1-4.5 33.8-4.5s23 1.6 33.8 4.5zM144.9 25.3C107 43.6 74.3 70.9 49.6 104.5l106.7 71.2c10-12.4 22.4-23 36.3-30.9L144.9 25.3zM384 256l128 0c0-45.2-11.7-87.7-32.3-124.6L372.5 202.9c7.4 16.2 11.5 34.2 11.5 53.1zM139.5 202.9L32.3 131.4C11.7 168.3 0 210.8 0 256l128 0c0-18.9 4.1-36.9 11.5-53.1zM0 288l0 96 128 0 0-96L0 288zm512 0l-128 0 0 96 128 0 0-96zM128 416L0 416l0 96 128 0 0-96zm384 0l-128 0 0 96 128 0 0-96zM272 192l0-16-32 0 0 16 0 272 0 16 32 0 0-16 0-272zm-64 32l0-16-32 0 0 16 0 240 0 16 32 0 0-16 0-240zm128 0l0-16-32 0 0 16 0 240 0 16 32 0 0-16 0-240z" />
    </Icon>
);

export default Dungeon;