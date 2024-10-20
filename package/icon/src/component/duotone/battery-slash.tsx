
import { Icon, generic } from "../../index";

/**
 * A component that renders the `battery-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-slash?s=duotone battery-slash}
 * @preview ![battery-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/battery-slash.svg)
 */
const BatterySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 176l0 160c0 44.2 35.8 80 80 80l294.2 0-81.2-64L112 352c-8.8 0-16-7.2-16-16l0-160c0-1.4 .2-2.7 .5-4L45.4 131.7C36.9 144.4 32 159.6 32 176zM154.8 96c27.2 21.3 54.4 42.7 81.7 64L496 160c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16l-14.6 0c20.6 16.2 41.3 32.3 61.9 48.5C563.1 386 576 362.5 576 336l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L154.8 96z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default BatterySlash;