
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-emergency-on` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-emergency-on?s=duotone light-emergency-on}
 * @preview ![light-emergency-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/light-emergency-on.svg)
 */
const LightEmergencyOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 192l0 160 320 0 0-160c0-88.4-71.6-160-160-160s-160 71.6-160 160zm48 0c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
        <path d="M69.3 36c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l48 32c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3l-48-32zM597.3 76c11-7.4 14-22.3 6.7-33.3s-22.3-14-33.3-6.7l-48 32c-11 7.4-14 22.3-6.7 33.3s22.3 14 33.3 6.7l48-32zM24 192c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0zm528 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0zM128 352c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-384 0z" />
    </Icon>
);

export default LightEmergencyOn;