
import { Icon } from "../../index";

/**
 * A component that renders the `futbol` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/futbol?s=sharp-regular futbol}
 * @preview ![futbol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/futbol.svg)
 */
const Futbol: typeof Icon = x => (
    <Icon {...x}>
        <path d="M412.4 118.9l-34.7 97.6L463.1 275c-2.9 31.7-12.9 61.4-28.4 87.4l-103.5-2.8-29.3 99.4c-14.8 3.3-30.2 5.1-45.9 5.1s-31.2-1.8-45.9-5.1l-29.3-99.4L77.2 362.4c-15.5-26-25.5-55.7-28.4-87.4l85.4-58.5L99.6 118.9c20.3-23.1 45.6-41.7 74.3-54.1L256 128l82.1-63.2c28.7 12.3 54 30.9 74.3 54.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-336l-76.1 55.3L209 320.7l94 0 29.1-89.4L256 176z" />
    </Icon>
);

export default Futbol;