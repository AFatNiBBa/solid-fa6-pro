
import { Icon } from "../../index";

/**
 * A component that renders the `taco` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taco?s=sharp-regular taco}
 * @preview ![taco](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/taco.svg)
 */
const Taco: typeof Icon = x => (
    <Icon {...x}>
        <path d="M325.9 86.1l88.3-2.7 24.7 84.9L512 218l-22.2 61.8C437.5 207.2 352.3 160 256 160s-181.5 47.2-233.8 119.8L0 218l73.1-49.7L97.8 83.4l88.3 2.7L256 32l69.9 54.1zM511.5 432c.3 5.3 .5 10.6 .5 16l0 32-48 0L48 480 0 480l0-32c0-5.4 .2-10.7 .5-16C8.8 298.1 120 192 256 192s247.2 106.1 255.5 240zM48.6 432l414.8 0C455.2 324.6 365.5 240 256 240S56.8 324.6 48.6 432zM184 304a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-64 64a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Taco;