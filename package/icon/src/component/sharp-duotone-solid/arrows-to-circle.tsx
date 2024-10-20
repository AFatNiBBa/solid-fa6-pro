
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-to-circle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-circle?s=sharp-duotone-solid arrows-to-circle}
 * @preview ![arrows-to-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-to-circle.svg)
 */
const ArrowsToCircle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M256 256a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M48 2.7L70.6 25.4 160 114.7 160 96l0-32 64 0 0 32 0 96 0 32-32 0-96 0-32 0 0-64 32 0 18.7 0L25.4 70.6 2.7 48 48 2.7zM224 416l0 32-64 0 0-32 0-18.7L70.6 486.6 48 509.3 2.7 464l22.6-22.6L114.7 352 96 352l-32 0 0-64 32 0 96 0 32 0 0 32 0 96zM416 64l64 0 0 32 0 18.7 89.4-89.4L592 2.7 637.3 48 614.6 70.6 525.3 160l18.7 0 32 0 0 64-32 0-96 0-32 0 0-32 0-96 0-32zm0 352l0-96 0-32 32 0 96 0 32 0 0 64-32 0-18.7 0 89.4 89.4L637.3 464 592 509.3l-22.6-22.6L480 397.3l0 18.7 0 32-64 0 0-32z" />
    </Icon>
);

export default ArrowsToCircle;