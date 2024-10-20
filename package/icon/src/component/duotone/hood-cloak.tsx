
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hood-cloak` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hood-cloak?s=duotone hood-cloak}
 * @preview ![hood-cloak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hood-cloak.svg)
 */
const HoodCloak: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160 320l0 192 256 0 0-192c0-70.7-57.3-128-128-128s-128 57.3-128 128z" />
        <path d="M432 0L288 0s0 0 0 0c-9.8 0-66 0-120.2 37.7C111.4 76.9 64 151.8 64 288c0 58.5-14.6 101.6-28.6 129.7c-7 14.1-14 24.5-19 31.1c-2.5 3.3-4.5 5.7-5.7 7.1c-.6 .7-1.1 1.2-1.3 1.4l-.2 .2c-9 9.1-11.7 22.8-6.8 34.7c5 12 16.6 19.8 29.6 19.8l128 0 0-192c0-70.7 57.3-128 128-128s128 57.3 128 128l0 192 128 0c12.9 0 24.6-7.8 29.6-19.8c4.9-11.9 2.2-25.6-6.8-34.7c0 0 0 0 0 0s0 0 0 0s0 0 0 0l-.1-.1c-.2-.2-.7-.7-1.3-1.4c-1.3-1.4-3.2-3.8-5.7-7.1c-5-6.6-11.9-17-19-31.1C526.6 389.6 512 346.5 512 288c0-103.1-46.5-172.8-95.8-217.2l32-29c7.3-6.7 9.8-17.2 6.2-26.4S441.9 0 432 0z" />
    </Icon>
);

export default HoodCloak;