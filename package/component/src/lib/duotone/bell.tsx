
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell?s=duotone bell}
 * @preview ![bell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bell.svg)
 */
const Bell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384c0 4.4 .9 8.9 2.8 13.1C8 408.6 19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9c1.9-4.2 2.8-8.7 2.8-13.1c0-7.7-2.8-15.3-8.1-21.3l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3C2.8 368.7 0 376.3 0 384z" />
        <path d="M288 448c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3l64 0h64z" />
    </Icon>
);

export default Bell;