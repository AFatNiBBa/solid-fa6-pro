
import { Icon } from "../../index";

/**
 * A component that renders the `carrot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/carrot?s=sharp-regular carrot}
 * @preview ![carrot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/carrot.svg)
 */
const Carrot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 80c0 40 7.3 55.3 32 80s40 32 80 32s80-40 80-40s-32-40-80-40c-32 0-40 8-40 8s8-8 8-40c0-48-40-80-40-80s-40 40-40 80zM28.1 447.5L0 512l64.5-28.1 227.9-99.1c45.9-19.9 75.5-65.2 75.5-115.2C368 200.2 311.8 144 242.4 144c-50 0-95.3 29.7-115.2 75.5L28.1 447.5zm204.4-88.9L209 335l-17-17L158.1 352l17 17 10.2 10.2L92.6 419.4l78.6-180.7c.2-.4 .3-.7 .5-1.1L207 273l17 17L257.9 256l-17-17-36.9-36.9c11.5-6.5 24.6-10.1 38.3-10.1c42.9 0 77.6 34.8 77.6 77.6c0 30.9-18.3 58.9-46.7 71.2l-40.8 17.7z" />
    </Icon>
);

export default Carrot;