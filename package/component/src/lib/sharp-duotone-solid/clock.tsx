
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock?s=sharp-duotone-solid clock}
 * @preview ![clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock.svg)
 */
const Clock: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 96l48 0c0 8 0 16 0 24c0 41 0 82.1 0 123.2L365.3 300l20 13.3c-8.9 13.3-17.8 26.6-26.6 39.9l-20-13.3c-32-21.3-64-42.7-96-64c-3.6-2.4-7.1-4.7-10.7-7.1c0-4.3 0-8.6 0-12.8c0-45.3 0-90.7 0-136c0-8 0-16 0-24z" />
        <path d="M232 96l0 24 0 136 0 12.8 10.7 7.1 96 64 20 13.3 26.6-39.9-20-13.3L280 243.2 280 120l0-24-48 0z" />
    </Icon>
);

export default Clock;