
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-up-across-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-up-across-line?s=duotone arrow-down-up-across-line}
 * @preview ![arrow-down-up-across-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down-up-across-line.svg)
 */
const ArrowDownUpAcrossLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256c0-17.7 14.3-32 32-32l96 0 64 0 192 0 64 0 96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0-64 0-192 0-64 0-96 0c-17.7 0-32-14.3-32-32z" />
        <path d="M137.4 502.6c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 192 288l-64 0 0 114.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96zM128 224l64 0 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160zM393.4 9.4l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 109.3 384 224l64 0 0-114.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zM448 448l0-160-64 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
    </Icon>
);

export default ArrowDownUpAcrossLine;