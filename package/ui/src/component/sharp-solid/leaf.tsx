
import { Icon } from "../../index";

/**
 * A component that renders the `leaf` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf?s=sharp-solid leaf}
 * @preview ![leaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/leaf.svg)
 */
const Leaf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 96l104 0c50.2 0 92.7-33 106.9-78.6C501.5 58.8 512 106.2 512 156.6C512 317.1 405.1 447.3 273 448l-1 0c-81.7 0-150.4-55.7-170.2-131.2C68.7 347.5 48 391.3 48 440l0 16 0 24L0 480l0-24 0-16c0-75.1 38.3-141.2 96.4-179.9C130.6 237.3 171.8 224 216 224c0 0 0 0 0 0l72 0 16 0 16 0 0-32-16 0-88 0c-40.2 0-78.2 9.6-111.7 26.5C126.9 147.5 193.4 96 272 96c0 0 0 0 0 0z" />
    </Icon>
);

export default Leaf;