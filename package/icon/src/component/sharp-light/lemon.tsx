
import { Icon } from "../../index";

/**
 * A component that renders the `lemon` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lemon?s=sharp-light lemon}
 * @preview ![lemon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lemon.svg)
 */
const Lemon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 80l-24.1 72.3c39.8 83.7 9.9 181.4-56.1 247.4s-163.7 96-247.4 56.1L48 480 0 432l24.1-72.3C-15.7 276 14.2 178.2 80.2 112.2s163.7-96 247.4-56.1L400 32l48 48zM110.2 425.5l12.2-4.1 11.6 5.5c68.2 32.5 151.7 9.4 211-49.9s82.3-142.9 49.9-211l-5.5-11.6 4.1-12.2 17.9-53.6-20-20L337.8 86.5l-12.2 4.1L313.9 85c-68.2-32.5-151.7-9.4-211 49.9S20.6 277.8 53 345.9l5.5 11.6-4.1 12.2L36.6 423.4l20 20 53.6-17.9zM228.3 143c-51.8 23.9-93.4 65.5-117.3 117.3l-8.5 18.4L73.5 265.3l8.5-18.4c27.1-58.7 74.3-105.9 133-133l18.4-8.5 13.4 29.1L228.3 143z" />
    </Icon>
);

export default Lemon;