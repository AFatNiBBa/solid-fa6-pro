
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-a` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-a?s=sharp-duotone-solid circle-a}
 * @preview ![circle-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-a.svg)
 */
const CircleA: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM120.6 368c37.9-80.7 75.8-161.5 113.6-242.2c2.2-4.6 4.3-9.2 6.5-13.8l30.5 0c2.2 4.6 4.3 9.2 6.5 13.8c37.9 80.7 75.8 161.4 113.6 242.2l-53 0-22.5-48-119.7 0-22.5 48-53 0zm98.1-96l74.6 0c-12.4-26.5-24.9-53-37.3-79.5c-12.4 26.5-24.9 53-37.3 79.5z" />
        <path d="M271.2 112l-30.5 0-6.5 13.8L120.6 368l53 0 22.5-48 119.7 0 22.5 48 53 0L277.7 125.8 271.2 112zm22.1 160l-74.6 0L256 192.5 293.3 272z" />
    </Icon>
);

export default CircleA;