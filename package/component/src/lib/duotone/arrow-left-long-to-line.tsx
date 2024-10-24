
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-long-to-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long-to-line?s=duotone arrow-left-long-to-line}
 * @preview ![arrow-left-long-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-left-long-to-line.svg)
 */
const ArrowLeftLongToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32L64 96c0-17.7-14.3-32-32-32S0 78.3 0 96z" />
        <path d="M137.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L237.3 224 608 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-370.7 0 73.4 73.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128z" />
    </Icon>
);

export default ArrowLeftLongToLine;