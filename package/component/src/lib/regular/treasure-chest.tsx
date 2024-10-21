
import { Icon } from "../../index";

/**
 * A component that renders the `treasure-chest` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/treasure-chest?s=regular treasure-chest}
 * @preview ![treasure-chest](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/treasure-chest.svg)
 */
const TreasureChest: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 80l256 0 0 160-64 0 0-16c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 16-64 0 0-160zM48 160c0-38.7 27.5-71 64-78.4L112 240l-64 0 0-80zm0 272l0-144 64 0 0 144-64 0zM416 288l0 144-256 0 0-144 64 0 0 32c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-32 64 0zM528 432l-64 0 0-144 64 0 0 144zm0-272l0 80-64 0 0-158.4c36.5 7.4 64 39.7 64 78.4zM128 32C57.3 32 0 89.3 0 160L0 432c0 26.5 21.5 48 48 48l480 0c26.5 0 48-21.5 48-48l0-272c0-70.7-57.3-128-128-128L128 32zM304 256l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default TreasureChest;