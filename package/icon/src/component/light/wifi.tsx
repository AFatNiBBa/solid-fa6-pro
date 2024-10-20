
import { Icon } from "../../index";

/**
 * A component that renders the `wifi` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi?s=light wifi}
 * @preview ![wifi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wifi.svg)
 */
const Wifi: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M27.3 184.4C102.4 110 205.8 64 320 64s217.6 46 292.7 120.4c6.3 6.2 16.4 6.2 22.6-.1s6.2-16.4-.1-22.6C554.3 81.5 442.9 32 320 32S85.7 81.5 4.7 161.7c-6.3 6.2-6.3 16.3-.1 22.6s16.3 6.3 22.6 .1zM320 224c70.5 0 134.4 28.5 180.7 74.7c6.3 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6c-52.1-51.9-123.9-84-203.3-84s-151.2 32.1-203.3 84c-6.3 6.2-6.3 16.4 0 22.6s16.4 6.3 22.6 0C185.6 252.5 249.5 224 320 224zm0 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Wifi;