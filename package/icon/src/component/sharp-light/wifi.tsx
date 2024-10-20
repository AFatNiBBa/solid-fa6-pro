
import { Icon } from "../../index";

/**
 * A component that renders the `wifi` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi?s=sharp-light wifi}
 * @preview ![wifi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/wifi.svg)
 */
const Wifi: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 224c-74.1 0-140.8 31.5-187.5 81.7L110.9 282c52.5-55.4 126.8-90 209.1-90s156.6 34.6 209.1 90l-21.6 23.8C460.8 255.5 394.1 224 320 224zm316.9-60.6l-21.6 23.7C540 111.1 435.5 64 320 64S100 111.1 24.6 187.1L3.1 163.4C84.1 82.2 196.2 32 320 32s235.9 50.2 316.9 131.4zM352 416a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Wifi;