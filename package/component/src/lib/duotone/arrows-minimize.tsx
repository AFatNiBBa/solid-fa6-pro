
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-minimize` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-minimize?s=duotone arrows-minimize}
 * @preview ![arrows-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-minimize.svg)
 */
const ArrowsMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 8.2 3.1 16.4 9.4 22.6s14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L160 397.3l0 50.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L64 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l50.7 0L9.4 457.4C3.1 463.6 0 471.8 0 480zM288 64l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-50.7 0L502.6 54.6c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6S488.2 0 480 0s-16.4 3.1-22.6 9.4L352 114.7 352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M9.4 9.4C21.9-3.1 42.1-3.1 54.6 9.4L160 114.7 160 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32L64 224c-17.7 0-32-14.3-32-32s14.3-32 32-32l50.7 0L9.4 54.6C-3.1 42.1-3.1 21.9 9.4 9.4zM288 320c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-50.7 0L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L352 397.3l0 50.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128z" />
    </Icon>
);

export default ArrowsMinimize;