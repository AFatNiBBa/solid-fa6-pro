
import { Icon } from "../../index";

/**
 * A component that renders the `phone-arrow-up-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-arrow-up-right?s=sharp-regular phone-arrow-up-right}
 * @preview ![phone-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/phone-arrow-up-right.svg)
 */
const PhoneArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272.4 369.2l31.9 18.4 26-26 33.2-33.2L457.7 366l-17.8 97.9C225.4 459.7 52.3 286.6 48.1 72L146 54.2l37.7 94.2-33.2 33.2-26 26 18.4 31.9c31 53.8 75.8 98.6 129.6 129.6zM512 336L352 272l-55.6 55.6c-46.5-26.8-85.2-65.5-112-112L240 160 176 0 0 32 0 64C0 311.4 200.6 512 448 512l32 0 32-176zM303 175l-17 17L320 225.9l17-17 127-127 0 46.1 0 24 48 0 0-24 0-104 0-24L488 0 384 0 360 0l0 48 24 0 46.1 0L303 175z" />
    </Icon>
);

export default PhoneArrowUpRight;