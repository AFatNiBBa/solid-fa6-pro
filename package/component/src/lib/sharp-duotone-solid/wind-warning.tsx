
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wind-warning` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-warning?s=sharp-duotone-solid wind-warning}
 * @preview ![wind-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wind-warning.svg)
 */
const WindWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 379.7 100.3 480 224 480c95.5 0 177.1-59.8 209.3-144L384 336l-32 0 0-64 32 0 63.4 0c.4-5.3 .6-10.6 .6-16s-.2-10.7-.6-16c-1.6-22.4-6.5-43.9-14.1-64C401.1 91.8 319.5 32 224 32C100.3 32 0 132.3 0 256zM200 128l48 0 0 24 0 112 0 24-48 0 0-24 0-112 0-24zm0 192l48 0 0 48-48 0 0-48z" />
        <path d="M433.3 176c7.7 20.1 12.6 41.6 14.1 64l96.6 0c53 0 96-43 96-96s-43-96-96-96l-32 0-32 0 0 64 32 0 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-110.7 0zM472 464l32 0 32 0c53 0 96-43 96-96s-43-96-96-96l-152 0-32 0 0 64 32 0 152 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-32 0 0 64zM248 128l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM200 320l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default WindWarning;