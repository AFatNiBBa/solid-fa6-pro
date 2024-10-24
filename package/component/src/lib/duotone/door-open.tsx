
import { Icon, generic } from "../../index";

/**
 * A component that renders the `door-open` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-open?s=duotone door-open}
 * @preview ![door-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/door-open.svg)
 */
const DoorOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 92.5L64 448l0 32 0 32 32 0 192 0 32 0 0-32 0-352 0-64 0-32c0-9.9-4.5-19.2-12.3-25.2C302 2.3 295.1 0 288 0c-2.6 0-5.2 .3-7.8 1l-179.9 45C79 51.3 64 70.5 64 92.5zM208 256c0-17.7 10.7-32 24-32s24 14.3 24 32s-10.7 32-24 32s-24-14.3-24-32z" />
        <path d="M320 128l128 0 0 352c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-320c0-35.3-28.7-64-64-64L320 64l0 64zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0-64-32 0zM232 288c13.3 0 24-14.3 24-32s-10.7-32-24-32s-24 14.3-24 32s10.7 32 24 32z" />
    </Icon>
);

export default DoorOpen;