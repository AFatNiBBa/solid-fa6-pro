
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sensor-on` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-on?s=duotone sensor-on}
 * @preview ![sensor-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sensor-on.svg)
 */
const SensorOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm64 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144zm96 0c0-13.3 10.7-24 24-24s24 10.7 24 24l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144z" />
        <path d="M604 74.7c7.4 11 4.4 25.9-6.7 33.3l-48 32c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l48-32c11-7.4 25.9-4.4 33.3 6.7zM512 256c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24zm4 122.7c7.4-11 22.3-14 33.3-6.7l48 32c11 7.4 14 22.3 6.7 33.3s-22.3 14-33.3 6.7l-48-32c-11-7.4-14-22.3-6.7-33.3z" />
    </Icon>
);

export default SensorOn;