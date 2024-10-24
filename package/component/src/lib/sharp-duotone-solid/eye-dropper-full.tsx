
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye-dropper-full` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-dropper-full?s=sharp-duotone-solid eye-dropper-full}
 * @preview ![eye-dropper-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/eye-dropper-full.svg)
 */
const EyeDropperFull: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 472l40 40 5-4 22.7-18.1L80 480l88 0L333.4 314.6l-45.3-45.3c-8.5 8.5-16.9 16.9-25.4 25.4L141.5 416 96 416l0-45.5c40.4-40.4 80.8-80.8 121.3-121.3c8.5-8.5 16.9-16.9 25.4-25.4l-45.3-45.3L32 344l0 88-9.9 12.3L4 467l-4 5z" />
        <path d="M341.6 29.2L240.1 130.8l-9.4-9.4L208 98.7 162.7 144l22.6 22.6 160 160L368 349.3 413.3 304l-22.6-22.6-9.4-9.4L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zm-124.4 220L96 370.5 96 416l45.5 0L262.7 294.7l-45.5-45.5z" />
    </Icon>
);

export default EyeDropperFull;