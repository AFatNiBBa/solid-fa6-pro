
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gun-squirt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun-squirt?s=duotone gun-squirt}
 * @preview ![gun-squirt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gun-squirt.svg)
 */
const GunSquirt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 160c0 17.7 14.3 32 32 32l352 0c17.7 0 32-14.3 32-32L64 160zM219 376l53 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-41 0-12 48z" />
        <path d="M104 32c13.3 0 24 10.7 24 24l0 8 320 0c41.8 0 77.4 26.7 90.5 64l13.5 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24l-13.5 0c-13.2 37.3-48.7 64-90.5 64l-199 0L199 455.8C195.5 470 182.7 480 168 480L64 480c-9.9 0-19.2-4.5-25.2-12.3s-8.2-17.9-5.8-27.5L79.4 254.6C34.3 246.7 0 207.3 0 160c0-47.6 34.6-87.1 80-94.7L80 56c0-13.3 10.7-24 24-24zm-8 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l352 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 128z" />
    </Icon>
);

export default GunSquirt;