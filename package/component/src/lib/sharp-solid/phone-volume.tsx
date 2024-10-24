
import { Icon } from "../../index";

/**
 * A component that renders the `phone-volume` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-volume?s=sharp-solid phone-volume}
 * @preview ![phone-volume](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/phone-volume.svg)
 */
const PhoneVolume: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32L144 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L368 288l144 80L480 512H448C200.6 512 0 311.4 0 64L0 32zM464 256c0-114.9-93.1-208-208-208l0-48C397.4 0 512 114.6 512 256l-48 0zM256 224a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm0-80l0-48c88.4 0 160 71.6 160 160l-48 0c0-61.9-50.1-112-112-112z" />
    </Icon>
);

export default PhoneVolume;