
import { Icon } from "../../index";

/**
 * A component that renders the `treasure-chest` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/treasure-chest?s=sharp-light treasure-chest}
 * @preview ![treasure-chest](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/treasure-chest.svg)
 */
const TreasureChest: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 64l0 192 64 0 0-64 0-32 32 0 128 0 32 0 0 32 0 64 64 0 0-192L128 64zM384 384l-32 0-128 0-32 0 0-32 0-64-64 0 0 160 320 0 0-160-64 0 0 64 0 32zM96 69.5C58.7 82.6 32 118.2 32 160l0 96 64 0L96 69.5zM32 288l0 160 64 0 0-160-64 0zM480 448l64 0 0-160-64 0 0 160zm64-192l0-96c0-41.8-26.7-77.4-64-90.5L480 256l64 0zM0 160C0 89.3 57.3 32 128 32l320 0c70.7 0 128 57.3 128 128l0 288 0 32-32 0L32 480 0 480l0-32L0 160zm352 32l-128 0 0 160 128 0 0-160zm-48 48l0 64 0 16-32 0 0-16 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default TreasureChest;