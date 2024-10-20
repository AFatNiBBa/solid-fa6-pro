
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-to-circle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-circle?s=duotone arrows-to-circle}
 * @preview ![arrows-to-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-to-circle.svg)
 */
const ArrowsToCircle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M256 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M9.4 9.4C21.9-3.1 42.1-3.1 54.6 9.4L160 114.7 160 96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96c0 4.3-.9 8.5-2.4 12.2c-1.6 3.7-3.8 7.3-6.9 10.3l-.1 .1c-3.1 3-6.6 5.3-10.3 6.9c-3.8 1.6-7.9 2.4-12.2 2.4l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l18.7 0L9.4 54.6C-3.1 42.1-3.1 21.9 9.4 9.4zM114.7 352L96 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0s0 0 0 0l.1 0c8.8 0 16.7 3.6 22.5 9.3l.1 .1c3 3.1 5.3 6.6 6.9 10.3c1.6 3.8 2.4 7.9 2.4 12.2l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-18.7L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L114.7 352zM416 96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 18.7L585.4 9.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 160l18.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-8.8 0-16.8-3.6-22.6-9.3l-.1-.1c-3-3.1-5.3-6.6-6.9-10.3s-2.4-7.8-2.4-12.2l0-.1s0 0 0 0l0-96zM525.3 352L630.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 397.3l0 18.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96s0 0 0 0l0-.1c0-4.3 .9-8.4 2.4-12.2c1.6-3.8 3.9-7.3 6.9-10.4c5.8-5.8 13.7-9.3 22.5-9.4l.1 0s0 0 0 0l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-18.7 0z" />
    </Icon>
);

export default ArrowsToCircle;