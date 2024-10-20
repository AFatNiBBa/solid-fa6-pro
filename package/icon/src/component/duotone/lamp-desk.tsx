
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lamp-desk` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-desk?s=duotone lamp-desk}
 * @preview ![lamp-desk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lamp-desk.svg)
 */
const LampDesk: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 256c0 2.6 .3 5.2 1 7.8L143 448l66 0L163.4 265.8 256 173.3l0-16c-12.4-12.4-24.8-24.8-37.3-37.3L105.4 233.4C99.3 239.4 96 247.6 96 256zm271.1-1.8c10.2 11 24.8 17.8 40.9 17.8c30.9 0 56-25.1 56-56c0-16.2-6.8-30.7-17.8-40.9l-79.1 79.1z" />
        <path d="M192 65.9C192 29.5 221.5 0 257.9 0c17.5 0 34.3 6.9 46.6 19.3L349.3 64 480 64c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-192 192c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-130.7-44.7-44.7C198.9 100.2 192 83.4 192 65.9zM32 448l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default LampDesk;