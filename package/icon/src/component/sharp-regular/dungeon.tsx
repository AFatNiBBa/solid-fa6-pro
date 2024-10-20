
import { Icon } from "../../index";

/**
 * A component that renders the `dungeon` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dungeon?s=sharp-regular dungeon}
 * @preview ![dungeon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dungeon.svg)
 */
const Dungeon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256l0 256L0 512 0 256zM320 143c15.1 7.5 28.7 17.6 40.2 29.6l62.2-41.5c-19.3-25.6-44.3-46.7-73.2-61.2L320 143zm-.4-85.1c-20-6.4-41.4-9.9-63.6-9.9s-43.6 3.5-63.6 9.9L222 132c10.9-2.6 22.3-4 34-4s23.1 1.4 34 4l29.6-74.1zm-230 73.3l62.2 41.5c11.5-12.1 25.1-22.1 40.2-29.6L162.8 70c-28.9 14.5-53.9 35.5-73.2 61.2zm290 67C390 215.4 396.8 235 399.1 256l64.9 0c0-35.4-8.8-68.7-24.4-97.8l-60 40zm-307.2-40C56.8 187.3 48 220.6 48 256l64.9 0c2.3-21 9.1-40.6 19.5-57.9l-60-40zM112 288l-64 0 0 72 64 0 0-72zm288 0l0 72 64 0 0-72-64 0zM48 392l0 72 64 0 0-72-64 0zm352 0l0 72 64 0 0-72-64 0zM272 192l0-16-32 0 0 16 0 256 0 16 32 0 0-16 0-256zm-64 32l0-16-32 0 0 16 0 224 0 16 32 0 0-16 0-224zm128 0l0-16-32 0 0 16 0 224 0 16 32 0 0-16 0-224z" />
    </Icon>
);

export default Dungeon;