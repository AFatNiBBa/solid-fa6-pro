
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angles-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-down?s=duotone angles-down}
 * @preview ![angles-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/angles-down.svg)
 */
const AnglesDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96c0 8.2 3.1 16.4 9.4 22.6l160 160c12.5 12.5 32.8 12.5 45.3 0l160-160c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6S392.2 64 384 64s-16.4 3.1-22.6 9.4L224 210.7 86.6 73.4C80.4 67.1 72.2 64 64 64s-16.4 3.1-22.6 9.4S32 87.8 32 96z" />
        <path d="M201.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 86.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
    </Icon>
);

export default AnglesDown;