
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-circle-bolt` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-circle-bolt?s=sharp-regular gauge-circle-bolt}
 * @preview ![gauge-circle-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/gauge-circle-bolt.svg)
 */
const GaugeCircleBolt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 464c29.4 0 57.3-6.1 82.6-17.1c7.4 14.7 16.7 28.2 27.7 40.1C333 503 295.5 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0C375.4 0 475.6 81.7 504 192.2c-2.6-.1-5.3-.2-8-.2c-14 0-27.5 1.6-40.6 4.7C429.9 110.7 350.3 48 256 48C141.1 48 48 141.1 48 256s93.1 208 208 208zm0-56c-30.9 0-56-25.1-56-56c0-22.3 13.1-41.6 32-50.6L232 120l0-24 48 0 0 24 0 181.4c18.9 9 32 28.3 32 50.6c0 30.9-25.1 56-56 56zM128 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-16 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm208-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm176 64a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm24 64L416 384l66.7 0L472 448l104-96-66.7 0L520 288z" />
    </Icon>
);

export default GaugeCircleBolt;