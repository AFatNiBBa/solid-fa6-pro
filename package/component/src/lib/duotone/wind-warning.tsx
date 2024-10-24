
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wind-warning` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-warning?s=duotone wind-warning}
 * @preview ![wind-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wind-warning.svg)
 */
const WindWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 379.7 100.3 480 224 480c95.5 0 177.1-59.8 209.3-144L384 336c-17.7 0-32-14.3-32-32s14.3-32 32-32l63.4 0c.4-5.3 .6-10.6 .6-16s-.2-10.7-.6-16c-1.6-22.4-6.5-43.9-14.1-64C401.1 91.8 319.5 32 224 32C100.3 32 0 132.3 0 256zm256 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM200 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112z" />
        <path d="M433.3 176c7.7 20.1 12.6 41.6 14.1 64l96.6 0c53 0 96-43 96-96s-43-96-96-96l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-110.7 0zM472 432c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96l-152 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l152 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM224 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default WindWarning;