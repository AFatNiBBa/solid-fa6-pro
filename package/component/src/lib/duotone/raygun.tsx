
import { Icon, generic } from "../../index";

/**
 * A component that renders the `raygun` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raygun?s=duotone raygun}
 * @preview ![raygun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/raygun.svg)
 */
const Raygun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 24.6l0 50.2C78.5 67.9 94.8 64 112 64l80 0L102.2 4.1C98.2 1.4 93.4 0 88.6 0C75 0 64 11 64 24.6zM288 56l0 8 0 231.6 0 .4c0 13.3 10.7 24 24 24s24-10.7 24-24l0-240c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 32l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-56 0-64 0-56c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M288 64L112 64C50.1 64 0 114.1 0 176s50.1 112 112 112l8.2 0L51.4 425.7c-7.9 15.8-1.5 35 14.3 42.9l80 40c15.8 7.9 35 1.5 42.9-14.3L288 295.6 288 64zM416 208l60.9 0 77.1 30.9c4.9 2 10.5 1.4 14.9-1.6s7-7.9 7-13.2l0-96c0-5.3-2.6-10.3-7-13.2s-10-3.6-14.9-1.6L476.9 144 416 144l0 64zM112 152a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Raygun;