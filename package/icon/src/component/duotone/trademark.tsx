
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trademark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trademark?s=duotone trademark}
 * @preview ![trademark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/trademark.svg)
 */
const Trademark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 128l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 86.4 115.2c6 8.1 15.5 12.8 25.6 12.8s19.6-4.7 25.6-12.8L576 224l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256c0-13.8-8.8-26-21.9-30.4c-3.3-1.1-6.7-1.6-10.1-1.6c-9.9 0-19.4 4.6-25.6 12.8L464 266.7 345.6 108.8C339.4 100.6 329.9 96 320 96c-3.4 0-6.8 .5-10.1 1.6C296.8 102 288 114.2 288 128z" />
        <path d="M32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l64 0 0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 96z" />
    </Icon>
);

export default Trademark;