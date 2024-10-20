
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dungeon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dungeon?s=sharp-duotone-solid dungeon}
 * @preview ![dungeon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dungeon.svg)
 */
const Dungeon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M176 208l0 16 0 240 0 16 32 0 0-16 0-240 0-16-32 0zm64-32l0 16 0 272 0 16 32 0 0-16 0-272 0-16-32 0zm64 32l0 16 0 240 0 16 32 0 0-16 0-240 0-16-32 0z" />
        <path d="M319.3 144.7L367.1 25.3c37.9 18.3 70.6 45.6 95.3 79.2L355.7 175.7c-10-12.4-22.4-23-36.3-30.9zM337.5 13.2L289.8 132.5C279 129.6 267.7 128 256 128s-23 1.6-33.8 4.5L174.5 13.2C200.1 4.7 227.5 0 256 0s55.9 4.7 81.5 13.2zM49.6 104.5C74.3 70.9 107 43.6 144.9 25.3l47.8 119.4c-14 8-26.3 18.5-36.3 30.9L49.6 104.5zm322.9 98.4l107.2-71.5C500.3 168.3 512 210.8 512 256l-128 0c0-18.9-4.1-36.9-11.5-53.1zM32.3 131.4l107.2 71.5C132.1 219.1 128 237.1 128 256L0 256c0-45.2 11.7-87.7 32.3-124.6zM128 288l0 96L0 384l0-96 128 0zm256 0l128 0 0 96-128 0 0-96zM0 416l128 0 0 96L0 512l0-96zm384 0l128 0 0 96-128 0 0-96z" />
    </Icon>
);

export default Dungeon;