
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-chef` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-chef?s=duotone hat-chef}
 * @preview ![hat-chef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hat-chef.svg)
 */
const HatChef: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128c0 7.1 .8 14.4 2.5 21.6C16 224 64 320 64 320c24.8 0 49.6 0 74.4 0L112.2 162.6c-1.5-8.7 4.4-17 13.2-18.4s17 4.4 18.4 13.2L170.9 320l69.1 0 0-160c0-8.8 7.2-16 16-16s16 7.2 16 16l0 160 69.1 0 27.1-162.6c1.5-8.7 9.7-14.6 18.4-13.2s14.6 9.7 13.2 18.4L373.6 320c24.8 0 49.6 0 74.4 0c0 0 48-96 61.5-170.4c1.7-7.2 2.5-14.5 2.5-21.6c0-43.7-30-83.3-74.4-93.5C430.3 32.8 423.1 32 416 32c-21.6 0-41.5 7.1-57.6 19.2C335 20.1 297.9 0 256 0s-79 20.1-102.4 51.2C137.6 39.1 117.6 32 96 32c-7.1 0-14.4 .8-21.6 2.5C30 44.7-.1 84.3 0 128z" />
        <path d="M64 320H448V448c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V320z" />
    </Icon>
);

export default HatChef;