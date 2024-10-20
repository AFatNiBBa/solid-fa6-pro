
import { Icon } from "../../index";

/**
 * A component that renders the `bluetooth` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bluetooth?s=sharp-thin bluetooth}
 * @preview ![bluetooth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bluetooth.svg)
 */
const Bluetooth: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M184 1.2l12.9 10.1 152 118.4 8 6.3-8 6.3L202.3 258.1 349.1 377.8l8 6.6-8.4 6.1-152 110.4L184 510.1l0-15.7 0-221.9L45 382.3 35 369.7 176.7 257.9 34.9 142.2l10.1-12.4L184 243.1l0-225.5 0-16.4zm16 275.6l0 201.9 130.9-95.1L200 276.8zm0-37.4L331 136 200 34l0 205.5z" />
    </Icon>
);

export default Bluetooth;