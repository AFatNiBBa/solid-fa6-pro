
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock?s=duotone clock}
 * @preview ![clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock.svg)
 */
const Clock: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120c.1-13.4 10.8-24 24-24c6.6 0 12.6 2.7 17 7c2.2 2.2 3.9 4.8 5.1 7.6c.6 1.4 1.1 2.9 1.4 4.5c.2 .8 .3 1.6 .4 2.4s.1 1.6 .1 2.5c0 41 0 82.1 0 123.2L365.3 300c6.9 4.6 10.7 12.2 10.7 20c0 4.6-1.3 9.2-4 13.3c-4.6 6.9-12.2 10.7-20 10.7c-4.6 0-9.2-1.3-13.3-4c-32-21.3-64-42.7-96-64C236 271.5 232 264 232 256c0-45.3 0-90.7 0-136z" />
        <path d="M256 96c-13.3 0-24 10.7-24 24l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default Clock;