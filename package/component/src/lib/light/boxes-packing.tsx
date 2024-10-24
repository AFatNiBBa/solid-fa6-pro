
import { Icon } from "../../index";

/**
 * A component that renders the `boxes-packing` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boxes-packing?s=light boxes-packing}
 * @preview ![boxes-packing](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/boxes-packing.svg)
 */
const BoxesPacking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M592 32L304 32c-8.8 0-16 7.2-16 16l0 80-32 0 0-80c0-26.5 21.5-48 48-48L592 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48l-210.7 0c1.8-5 2.7-10.4 2.7-16l0-16 208 0c8.8 0 16-7.2 16-16l0-416c0-8.8-7.2-16-16-16zM555.3 316.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L496 302.6 496 432c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-129.4-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l64-64c6.2-6.2 16.4-6.2 22.6 0l64 64zM352 192L32 192l0 64 32 0 256 0 32 0 0-64zM0 256l0-64c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 192c0 17.7-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32l0-192c-17.7 0-32-14.3-32-32zm64 32l0 192 256 0 0-192L64 288zm80 32l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default BoxesPacking;