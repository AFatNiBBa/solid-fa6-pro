
import { Icon } from "../../index";

/**
 * A component that renders the `phone-arrow-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-arrow-right?s=sharp-regular phone-arrow-right}
 * @preview ![phone-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/phone-arrow-right.svg)
 */
const PhoneArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272.4 369.2l31.9 18.4 26-26 33.2-33.2L457.7 366l-17.8 97.9C225.4 459.7 52.3 286.6 48.1 72L146 54.2l37.7 94.2-33.2 33.2-26 26 18.4 31.9c31 53.8 75.8 98.6 129.6 129.6zM512 336L352 272l-55.6 55.6c-46.5-26.8-85.2-65.5-112-112L240 160 176 0 0 32 0 64C0 311.4 200.6 512 448 512l32 0 32-176zM413.8 23l-17-17L362.9 40l17 17 39 39L312 96l-24 0 0 48 24 0 106.9 0-39 39-17 17 33.9 33.9 17-17 80-80 17-17-17-17-80-80z" />
    </Icon>
);

export default PhoneArrowRight;