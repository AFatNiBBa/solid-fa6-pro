
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-7` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-7?s=sharp-duotone-solid circle-7}
 * @preview ![circle-7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-7.svg)
 */
const Circle_7: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l24 0 144 0 24 0 0 29.4-2.3 4.9L245.5 384l-53 0 3.9-8.2L290.2 176 184 176l-24 0 0-48z" />
        <path d="M352 128l-24 0-144 0-24 0 0 48 24 0 106.2 0L196.3 375.8l-3.9 8.2 53 0L349.7 162.2l2.3-4.9 0-29.4z" />
    </Icon>
);

export default Circle_7;