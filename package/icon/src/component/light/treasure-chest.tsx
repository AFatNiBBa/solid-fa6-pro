
import { Icon } from "../../index";

/**
 * A component that renders the `treasure-chest` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/treasure-chest?s=light treasure-chest}
 * @preview ![treasure-chest](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/treasure-chest.svg)
 */
const TreasureChest: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 64l0 192 64 0 0-32c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 64 0 0-192L128 64zM320 384l-64 0c-35.3 0-64-28.7-64-64l0-32-64 0 0 160 320 0 0-160-64 0 0 32c0 35.3-28.7 64-64 64zM96 69.5C58.7 82.6 32 118.2 32 160l0 96 64 0L96 69.5zM32 288l0 144c0 8.8 7.2 16 16 16l48 0 0-160-64 0zM480 448l48 0c8.8 0 16-7.2 16-16l0-144-64 0 0 160zm64-192l0-96c0-41.8-26.7-77.4-64-90.5L480 256l64 0zM0 160C0 89.3 57.3 32 128 32l320 0c70.7 0 128 57.3 128 128l0 272c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48L0 160zm320 32l-64 0c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32zm-16 48l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default TreasureChest;