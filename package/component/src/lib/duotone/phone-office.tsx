
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-office` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-office?s=duotone phone-office}
 * @preview ![phone-office](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/phone-office.svg)
 */
const PhoneOffice: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 352c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-352c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32zM320 288a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 128a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM448 288a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 128a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M64 32l32 0 0 352c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-352 288 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32zM352 96c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L352 96zM320 288a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm160-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM448 416a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-96-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default PhoneOffice;