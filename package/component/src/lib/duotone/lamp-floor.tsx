
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lamp-floor` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-floor?s=duotone lamp-floor}
 * @preview ![lamp-floor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lamp-floor.svg)
 */
const LampFloor: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 224l0 224 32 0 32 0 0-224-64 0z" />
        <path d="M66.3 20.1C71.1 8 82.9 0 96 0L288 0c13.1 0 24.9 8 29.7 20.1l64 160c3.9 9.9 2.7 21-3.2 29.8s-15.9 14.1-26.5 14.1L32 224c-10.6 0-20.5-5.3-26.5-14.1s-7.2-20-3.2-29.8l64-160zM96 448l96 0 96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default LampFloor;