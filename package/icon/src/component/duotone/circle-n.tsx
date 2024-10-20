
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-n` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-n?s=duotone circle-n}
 * @preview ![circle-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-n.svg)
 */
const CircleN: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 152c0-10.5 6.8-19.8 16.8-22.9s20.9 .6 26.9 9.2c33.4 48.3 66.8 96.6 100.3 144.8L304 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 208c0 10.5-6.8 19.8-16.8 22.9c-2.4 .7-4.8 1.1-7.2 1.1c-7.7 0-15.2-3.7-19.7-10.3c-33.4-48.3-66.8-96.6-100.3-144.8L208 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208z" />
        <path d="M176.8 129.1c10-3.1 20.9 .6 26.9 9.2L304 283.2 304 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 208c0 10.5-6.8 19.8-16.8 22.9s-20.9-.6-26.9-9.2L208 228.8 208 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208c0-10.5 6.8-19.8 16.8-22.9z" />
    </Icon>
);

export default CircleN;