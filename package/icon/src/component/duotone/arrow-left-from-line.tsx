
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-from-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-from-line?s=duotone arrow-left-from-line}
 * @preview ![arrow-left-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-left-from-line.svg)
 */
const ArrowLeftFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M384 96l0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L109.3 224l66.7 0 112 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-112 0-66.7 0 73.4 73.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128z" />
    </Icon>
);

export default ArrowLeftFromLine;