
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-slash?s=sharp-duotone-solid phone-slash}
 * @preview ![phone-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/phone-slash.svg)
 */
const PhoneSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M63.8 32l144-32 80 144-83.8 67c13 24.6 28.5 47.5 46.3 68.6c-28.7 22.3-57.5 44.6-86.2 66.9C101.5 269.5 63.9 171.1 63.9 64l0-32zM234.3 415.7L322.7 346c13.4 9.5 27.5 18.1 42.1 25.8l67-83.8 144 80-32 144-32 0c-104.8 0-201.3-36-277.6-96.3z" />
        <path d="M610.4 .1l-19 14.7L19 459.3 0 474l29.4 37.9 19-14.7L620.9 52.7l19-14.7L610.4 .1z" />
    </Icon>
);

export default PhoneSlash;