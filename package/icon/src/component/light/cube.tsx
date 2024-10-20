
import { Icon } from "../../index";

/**
 * A component that renders the `cube` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=light cube}
 * @preview ![cube](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cube.svg)
 */
const Cube: typeof Icon = x => (
    <Icon {...x}>
        <path d="M261.5 35.1c-3.6-1.3-7.5-1.3-11 0L44.1 110.7 256 194l211.9-83.2L261.5 35.1zM32 385.7c0 6.7 4.2 12.7 10.5 15L240 473.1l0-251L32 140.3l0 245.3zm240 87.4l197.5-72.4c6.3-2.3 10.5-8.3 10.5-15l0-245.3L272 222l0 251zM239.5 5c10.7-3.9 22.4-3.9 33 0l208 76.3c18.9 6.9 31.5 24.9 31.5 45.1l0 259.3c0 20.1-12.6 38.1-31.5 45.1L272.5 507c-10.7 3.9-22.4 3.9-33 0l-208-76.3C12.6 423.8 0 405.8 0 385.7L0 126.3c0-20.1 12.6-38.1 31.5-45.1L239.5 5z" />
    </Icon>
);

export default Cube;