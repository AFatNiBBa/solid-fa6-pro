
import { Icon } from "../../index";

/**
 * A component that renders the `carrot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/carrot?s=sharp-solid carrot}
 * @preview ![carrot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/carrot.svg)
 */
const Carrot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M360 0s-40 40-40 80s7.3 55.3 32 80s40 32 80 32s80-40 80-40s-32-40-80-40c-32 0-40 8-40 8s8-8 8-40c0-48-40-80-40-80zM127.2 219.5L0 512l162.7-70.7-46-46L105.4 384 128 361.4l11.3 11.3 54.9 54.9 98.3-42.7c45.9-19.9 75.5-65.2 75.5-115.2C368 200.2 311.8 144 242.4 144c-37.4 0-72.1 16.6-95.6 44.1l56.6 56.6L214.6 256 192 278.6l-11.3-11.3L129 215.6c-.6 1.3-1.2 2.6-1.8 4z" />
    </Icon>
);

export default Carrot;