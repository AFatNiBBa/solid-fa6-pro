
import { Icon } from "../../index";

/**
 * A component that renders the `phone-rotary` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-rotary?s=sharp-regular phone-rotary}
 * @preview ![phone-rotary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/phone-rotary.svg)
 */
const PhoneRotary: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 208V128s96-96 256-96s256 96 256 96v80H416l-32-80s-48-24-128-24s-128 24-128 24L96 208H0zM256 384a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM32 480l0-96L160 160l192 0L480 384l0 96L32 480zm400-48l0-35.3L324.1 208l-136.3 0L80 396.7 80 432l352 0z" />
    </Icon>
);

export default PhoneRotary;