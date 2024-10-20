
import { Icon } from "../../index";

/**
 * A component that renders the `mace` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mace?s=sharp-thin mace}
 * @preview ![mace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mace.svg)
 */
const Mace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M323.7 100.9l-3-5.6L288 34 255.3 95.3l-3 5.6-6 2c-37.2 12.8-66.7 42.3-79.5 79.5l-2 6-5.6 3L98 224l61.3 32.7 5.6 3 2 6c12.8 37.2 42.3 66.7 79.5 79.5l6 2 3 5.6L288 414l32.7-61.3 3-5.6 6-2c37.2-12.8 66.7-42.3 79.5-79.5l2-6 5.6-3L478 224l-61.3-32.7-5.6-3-2-6c-12.8-37.2-42.3-66.7-79.5-79.5l-6-2zM495 214.9l17 9.1-17 9.1-70.8 37.8c-14.4 41.9-47.5 75-89.4 89.4L297.1 431 288 448l-9.1-17-37.8-70.8c-41.9-14.4-75-47.5-89.4-89.4L81 233.1 64 224l17-9.1 70.8-37.8c14.4-41.9 47.5-75 89.4-89.4L278.9 17 288 0l9.1 17 37.7 70.8c41.9 14.4 75 47.5 89.4 89.4L495 214.9zM240 224a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM59.3 500.7L48 512 36.7 500.7 11.3 475.3 0 464l11.3-11.3L141.9 322.1c3 4.5 6.2 8.8 9.6 13L22.6 464 48 489.4 176.9 360.5c4.2 3.4 8.5 6.6 13 9.6L59.3 500.7z" />
    </Icon>
);

export default Mace;