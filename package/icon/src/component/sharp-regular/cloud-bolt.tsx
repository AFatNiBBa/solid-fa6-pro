
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-bolt` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-bolt?s=sharp-regular cloud-bolt}
 * @preview ![cloud-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cloud-bolt.svg)
 */
const CloudBolt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 176l0-48c0-26.5-21.5-48-48-48c-9.7 0-18.7 2.8-26.2 7.7l-38.8 25.3L228.4 75.2C216.7 58.7 197.6 48 176 48c-35.3 0-64 28.7-64 64l0 21.5 0 33.9L80 178.7c-18.7 6.6-32 24.5-32 45.3l0 48 48 0 111.2 0L144 320l-48 0-48 0L0 320l0-48 0-48c0-41.8 26.7-77.4 64-90.5L64 112C64 50.1 114.1 0 176 0c37.9 0 71.3 18.8 91.6 47.5C282.7 37.7 300.7 32 320 32c53 0 96 43 96 96c53 0 96 43 96 96l0 48 0 48-48 0-48 0-16 0s0 0 0 0l-76.5 0 15-48 77.5 0 48 0 0-48c0-26.5-21.5-48-48-48l-48 0zM232 384l-88 0 0-24L320 224 280 352l88 0 0 24L192 512l40-128z" />
    </Icon>
);

export default CloudBolt;