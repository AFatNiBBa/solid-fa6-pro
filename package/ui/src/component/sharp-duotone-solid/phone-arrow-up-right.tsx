
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-arrow-up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-arrow-up-right?s=sharp-duotone-solid phone-arrow-up-right}
 * @preview ![phone-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/phone-arrow-up-right.svg)
 */
const PhoneArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L144 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L368 288l144 80L480 512l-32 0C200.6 512 0 311.4 0 64L0 32z" />
        <path d="M288 190.1l17-17 119-119-54.1 0-24 0 0-48 24 0 112 0 24 0 0 24 0 112 0 24-48 0 0-24 0-54.1-119 119-17 17L288 190.1z" />
    </Icon>
);

export default PhoneArrowUpRight;