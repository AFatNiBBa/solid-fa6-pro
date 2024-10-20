
import { Icon } from "../../index";

/**
 * A component that renders the `phone-volume` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-volume?s=sharp-regular phone-volume}
 * @preview ![phone-volume](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/phone-volume.svg)
 */
const PhoneVolume: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272.4 369.2l31.9 18.4 26-26 33.2-33.2L457.7 366l-17.8 97.9C225.4 459.7 52.3 286.6 48.1 72L146 54.2l37.7 94.2-33.2 33.2-26 26 18.4 31.9c31 53.8 75.8 98.6 129.6 129.6zM512 336L352 272l-55.6 55.6c-46.5-26.8-85.2-65.5-112-112L240 160 176 0 0 32 0 64C0 311.4 200.6 512 448 512l32 0 32-176zM256 48c114.9 0 208 93.1 208 208l48 0C512 114.6 397.4 0 256 0l0 48zm32 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm80 0l48 0c0-88.4-71.6-160-160-160l0 48c61.9 0 112 50.1 112 112z" />
    </Icon>
);

export default PhoneVolume;