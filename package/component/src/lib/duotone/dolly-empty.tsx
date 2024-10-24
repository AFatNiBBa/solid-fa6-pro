
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dolly-empty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly-empty?s=duotone dolly-empty}
 * @preview ![dolly-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dolly-empty.svg)
 */
const DollyEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M351.9 416A96 96 0 1 1 160 416a96 96 0 1 1 191.9 0z" />
        <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l72.9 0L197 340.2c16.3-12.7 36.7-20.2 59-20.2c.6 0 1.2 0 1.7 0L165.7 43.8C156.9 17.6 132.5 0 104.9 0L32 0zM331.8 357c12.7 16.3 20.2 36.7 20.2 59c0 .6 0 1.2 0 1.7l202.1-67.4c16.8-5.6 25.8-23.7 20.2-40.5s-23.7-25.8-40.5-20.2L331.8 357z" />
    </Icon>
);

export default DollyEmpty;