
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-cross` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-cross?s=duotone arrows-cross}
 * @preview ![arrows-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-cross.svg)
 */
const ArrowsCross: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64c0 8.2 3.1 16.4 9.4 22.6L178.7 256c15.1-15.1 30.2-30.2 45.3-45.3L54.6 41.4C48.4 35.1 40.2 32 32 32s-16.4 3.1-22.6 9.4S0 55.8 0 64zM224 301.3L338.7 416 288 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 50.7L269.3 256 224 301.3z" />
        <path d="M256 64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-50.7L54.6 470.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L338.7 96 288 96c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default ArrowsCross;