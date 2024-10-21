
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sensor` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor?s=duotone sensor}
 * @preview ![sensor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sensor.svg)
 */
const Sensor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm64 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144zm96 0c0-13.3 10.7-24 24-24s24 10.7 24 24l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144z" />
        <path d="M88 96c13.3 0 24 10.7 24 24l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24zm96 0c13.3 0 24 10.7 24 24l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default Sensor;