
import { Icon } from "../../index";

/**
 * A component that renders the `wifi` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi?s=thin wifi}
 * @preview ![wifi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/wifi.svg)
 */
const Wifi: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13.8 175.3C92 96.6 200.3 48 320 48s228 48.6 306.2 127.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3C556.4 82.5 444.1 32 320 32S83.6 82.5 2.5 164c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0zM320 208c72.2 0 137.8 28.1 186.5 74c3.2 3 8.3 2.9 11.3-.3s2.9-8.3-.3-11.3C465.9 221.8 396.4 192 320 192s-145.9 29.8-197.5 78.4c-3.2 3-3.4 8.1-.3 11.3s8.1 3.4 11.3 .3c48.7-45.9 114.3-74 186.5-74zm0 160a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Wifi;