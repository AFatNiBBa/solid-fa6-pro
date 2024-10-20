
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-split-up-and-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-split-up-and-left?s=duotone arrows-split-up-and-left}
 * @preview ![arrows-split-up-and-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-split-up-and-left.svg)
 */
const ArrowsSplitUpAndLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M201.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 109.3l0 163.9c38.3 22.1 64 63.5 64 110.9l0-274.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-96-96C336.4 3.1 328.2 0 320 0s-16.4 3.1-22.6 9.4l-96 96z" />
        <path d="M9.4 310.6c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 256 224 256c70.7 0 128 57.3 128 128c0 35.3 28.7 64 64 64l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-70.7 0-128-57.3-128-128c0-35.3-28.7-64-64-64l-114.7 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96z" />
    </Icon>
);

export default ArrowsSplitUpAndLeft;