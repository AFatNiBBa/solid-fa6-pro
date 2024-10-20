
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-slash?s=duotone phone-slash}
 * @preview ![phone-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/phone-slash.svg)
 */
const PhoneSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 64c0 107.4 37.8 206 100.8 283.1L253 278c-17.8-21.5-32.9-45.2-45-70.7L257.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96C222.6 9.4 207.8 0 192 0c-3.5 0-7 .5-10.5 1.4l-88 24C76.1 30.2 64 46 64 64zM234.3 415.6C310.7 476 407.1 512 512 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L368.7 368c-15-7.1-29.3-15.2-43-24.3l-91.3 72z" />
        <path d="M634.9 9.2c-8.2-10.4-23.3-12.3-33.7-4.1l-592 464c-10.4 8.2-12.3 23.3-4.1 33.7s23.3 12.3 33.7 4.1l592-464c10.4-8.2 12.3-23.3 4.1-33.7z" />
    </Icon>
);

export default PhoneSlash;