
import { Icon } from "../../index";

/**
 * A component that renders the `grill` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grill?s=sharp-light grill}
 * @preview ![grill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/grill.svg)
 */
const Grill: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 32c0 106-86 192-192 192S32 202 32 96l0-32 384 0zM32 32L0 32 0 64 0 96c0 92.5 56 171.9 136 206.1l-23.7 52c-5.2-1.4-10.7-2.1-16.4-2.1c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64l168.6 0 24.8 54.6 29.1-13.2L312 302.1C392 267.9 448 188.5 448 96l0-32 0-32-32 0L32 32zM140.4 369.9l26.1-57.3c18.4 4.9 37.7 7.5 57.6 7.5s39.2-2.6 57.6-7.5L314.1 384l-162.6 0c-3-5.2-6.8-10-11.1-14.1zM96 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default Grill;