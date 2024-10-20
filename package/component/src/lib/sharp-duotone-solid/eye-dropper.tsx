
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye-dropper` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-dropper?s=sharp-duotone-solid eye-dropper}
 * @preview ![eye-dropper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/eye-dropper.svg)
 */
const EyeDropper: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 472l40 40 5-4 22.7-18.1L80 480l88 0L333.4 314.6l-45.3-45.3L141.5 416 96 416l0-45.5L242.6 223.9l-45.3-45.3L32 344l0 88-9.9 12.3L4 467l-4 5z" />
        <path d="M240.1 130.8L341.6 29.2c39-39 102.2-39 141.1 0s39 102.2 0 141.1L381.2 271.9l9.4 9.4L413.3 304 368 349.3l-22.6-22.6-160-160L162.7 144 208 98.7l22.6 22.6 9.4 9.4z" />
    </Icon>
);

export default EyeDropper;