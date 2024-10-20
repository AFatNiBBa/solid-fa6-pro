
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-signal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal?s=sharp-solid mobile-signal}
 * @preview ![mobile-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mobile-signal.svg)
 */
const MobileSignal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64l224 0 0 242.5c18.8-20.4 40.3-38.3 64-53L352 64l0-64L288 0 64 0 0 0 0 64 0 448l0 64 64 0 144 0c0-22 2.3-43.4 6.7-64L64 448 64 64zM224 384l-16 0-64 0-16 0 0 32 16 0 64 0 15.5 0 .5-1.6 0-30.4zm288-80l0-48c-141.4 0-256 114.6-256 256l48 0c0-114.9 93.1-208 208-208zM480 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-80 0c0-61.9 50.1-112 112-112l0-48c-88.4 0-160 71.6-160 160l48 0z" />
    </Icon>
);

export default MobileSignal;