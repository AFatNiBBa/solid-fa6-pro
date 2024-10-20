
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h5` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h5?s=duotone h5}
 * @preview ![h5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/h5.svg)
 */
const H5: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 256 0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 192 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 224 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96z" />
        <path d="M400.7 89.4C403.8 74.6 416.9 64 432 64l144 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-118 0-18.5 88 84.6 0c64.1 0 116 51.9 116 116s-51.9 116-116 116l-67.6 0c-37.9 0-71.5-24.2-83.5-60.2l-3.2-9.7c-5.6-16.8 3.5-34.9 20.2-40.5s34.9 3.5 40.5 20.2l3.2 9.7c3.3 9.8 12.4 16.4 22.8 16.4l67.6 0c28.7 0 52-23.3 52-52s-23.3-52-52-52l-124 0c-9.6 0-18.8-4.3-24.8-11.8s-8.5-17.3-6.5-26.8l32-152z" />
    </Icon>
);

export default H5;