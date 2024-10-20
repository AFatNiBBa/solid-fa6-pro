
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-1` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-1?s=duotone circle-1}
 * @preview ![circle-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/circle-1.svg)
 */
const Circle_1: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM168 360c0-13.3 10.7-24 24-24l40 0 0-142.6-20.1 11.5c-11.5 6.6-26.2 2.6-32.7-8.9s-2.6-26.2 8.9-32.7l56-32c3.7-2.1 7.8-3.2 11.9-3.2c4.2 0 8.3 1.1 12 3.2c7.4 4.3 12 12.2 12 20.8l0 184 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0-64 0c-13.3 0-24-10.7-24-24z" />
        <path d="M280 152c0-8.6-4.6-16.5-12-20.8s-16.5-4.3-24-.1l-56 32c-11.5 6.6-15.5 21.2-8.9 32.7s21.2 15.5 32.7 8.9L232 193.4 232 336l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-184z" />
    </Icon>
);

export default Circle_1;