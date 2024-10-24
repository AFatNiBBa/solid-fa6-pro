
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rainbow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rainbow?s=duotone rainbow}
 * @preview ![rainbow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rainbow.svg)
 */
const Rainbow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 352l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-88.4 71.6-160 160-160s160 71.6 160 160l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-123.7-100.3-224-224-224S96 228.3 96 352z" />
        <path d="M64 352C64 210.6 178.6 96 320 96s256 114.6 256 256l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96C640 175.3 496.7 32 320 32S0 175.3 0 352l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96zm192 0c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-70.7-57.3-128-128-128s-128 57.3-128 128l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96z" />
    </Icon>
);

export default Rainbow;