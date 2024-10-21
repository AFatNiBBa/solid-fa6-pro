
import { Icon } from "../../index";

/**
 * A component that renders the `boxes-packing` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boxes-packing?s=regular boxes-packing}
 * @preview ![boxes-packing](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/boxes-packing.svg)
 */
const BoxesPacking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M592 48L304 48l0 80-48 0 0-80c0-26.5 21.5-48 48-48L592 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48l-210.7 0c1.8-5 2.7-10.4 2.7-16l0-32 208 0 0-416zM561 311c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23 0 70.1c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-70.1-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l64-64c9.4-9.4 24.6-9.4 33.9 0l64 64zM48 208l0 48 32 0 224 0 32 0 0-48L48 208zM0 272l0-80c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 80c0 17.7-14.3 32-32 32l0 176c0 17.7-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32l0-176c-17.7 0-32-14.3-32-32zm80 32l0 160 224 0 0-160L80 304zm72 32l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default BoxesPacking;