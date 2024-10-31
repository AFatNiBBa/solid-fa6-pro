
import { Icon, generic } from "../../index";

/**
 * A component that renders the `feather-pointed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather-pointed?s=sharp-duotone-solid feather-pointed}
 * @preview ![feather-pointed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/feather-pointed.svg)
 */
const FeatherPointed: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M63 303.1c0 30.7 7.7 60.6 25.7 86.2L271.9 206.1l17-17c11.3 11.3 22.6 22.6 33.9 33.9l-17 17L122.7 423.3c25.6 18 55.5 25.7 86.2 25.7c58 0 119.3-27.5 161.5-65L304 384l0-16 108.1-32.4c9.9-14.7 18.9-30.7 27.1-47.6L368 288l0-16 89.6-26.9C492.2 155.2 507.6 53.7 512 0C428.3 6.9 228.5 40.5 137.4 131.6C95.2 173.9 63 240.4 63 303.1z" />
        <path d="M6.1 472l17-17L271.9 206.1l17-17 33.9 33.9-17 17L57 489l-17 17L6.1 472z" />
    </Icon>
);

export default FeatherPointed;