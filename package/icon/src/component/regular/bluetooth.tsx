
import { Icon } from "../../index";

/**
 * A component that renders the `bluetooth` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bluetooth?s=regular bluetooth}
 * @preview ![bluetooth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bluetooth.svg)
 */
const Bluetooth: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M182.1 2.1c8.6-3.9 18.7-2.4 25.8 3.9l136 120c5.3 4.7 8.2 11.4 8.1 18.4s-3.3 13.6-8.7 18.1L229.8 256l113.5 93.5c5.4 4.5 8.6 11.1 8.7 18.1s-2.8 13.8-8.1 18.4l-136 120c-7.1 6.2-17.2 7.8-25.8 3.9S168 497.4 168 488l0-181.1L71.3 386.5c-10.2 8.4-25.4 7-33.8-3.3s-7-25.4 3.3-33.8L154.2 256 40.7 162.5C30.5 154.1 29 139 37.5 128.7s23.6-11.7 33.8-3.3L168 205.1 168 24c0-9.4 5.5-18 14.1-21.9zM216 306.9l0 128 75-66.2-75-61.8zm0-101.7l75-61.8L216 77.2l0 128z" />
    </Icon>
);

export default Bluetooth;