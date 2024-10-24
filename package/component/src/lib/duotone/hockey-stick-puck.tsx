
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hockey-stick-puck` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-stick-puck?s=duotone hockey-stick-puck}
 * @preview ![hockey-stick-puck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hockey-stick-puck.svg)
 */
const HockeyStickPuck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384l0 96c0 17.7 14.3 32 32 32l32 0 0-160-32 0c-17.7 0-32 14.3-32 32zm96-32l0 128 0 32 32 0 32 0 44.2 0c24.2 0 46.4-13.7 57.2-35.4L476.6 46.3c7.9-15.8 1.5-35-14.3-42.9C457.7 1.1 452.8 0 448 0c-11.7 0-23 6.5-28.6 17.7L252.2 352 96 352z" />
        <path d="M96 352l-32 0 0 160 32 0 0-160zm320 64c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-192 0z" />
    </Icon>
);

export default HockeyStickPuck;