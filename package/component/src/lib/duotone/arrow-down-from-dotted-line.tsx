
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-from-dotted-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-dotted-line?s=duotone arrow-down-from-dotted-line}
 * @preview ![arrow-down-from-dotted-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down-from-dotted-line.svg)
 */
const ArrowDownFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 64A32 32 0 1 1 0 64a32 32 0 1 1 64 0zm96 0A32 32 0 1 1 96 64a32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M201.4 470.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 370.7l0-66.7 0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112 0 66.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
    </Icon>
);

export default ArrowDownFromDottedLine;