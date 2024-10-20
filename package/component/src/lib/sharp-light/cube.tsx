
import { Icon } from "../../index";

/**
 * A component that renders the `cube` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=sharp-light cube}
 * @preview ![cube](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cube.svg)
 */
const Cube: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 7l5.5 2 240 88 10.5 3.8 0 11.2 0 272 0 10.5-9.6 4.2-240 104-6.4 2.8-6.4-2.8-240-104L0 394.5 0 384 0 112l0-11.2L10.5 97l240-88L256 7zM32 373.5l208 90.1L240 222 32 140.3l0 233.2zm240 90.1l208-90.1 0-233.2L272 222l0 241.6zM256 41L54.7 114.9 256 194l201.3-79.1L256 41z" />
    </Icon>
);

export default Cube;