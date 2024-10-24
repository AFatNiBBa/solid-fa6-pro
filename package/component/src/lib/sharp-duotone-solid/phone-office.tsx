
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-office` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-office?s=sharp-duotone-solid phone-office}
 * @preview ![phone-office](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/phone-office.svg)
 */
const PhoneOffice: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 0l0 32 0 384 128 0 0-384 0-32L96 0zM320 256l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0zM448 256l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
        <path d="M0 32l96 0 0 384 128 0 0-384 352 0 0 480L0 512 0 32zM512 96L320 96l0 96 192 0 0-96zM320 256l0 64 64 0 0-64-64 0zm192 0l-64 0 0 64 64 0 0-64zM448 384l0 64 64 0 0-64-64 0zm-64 0l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default PhoneOffice;