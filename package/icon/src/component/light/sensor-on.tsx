
import { Icon } from "../../index";

/**
 * A component that renders the `sensor-on` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-on?s=light sensor-on}
 * @preview ![sensor-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sensor-on.svg)
 */
const SensorOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm48 96c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16zm64 0c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16zM600.2 93.7c7.6-4.5 10-14.4 5.5-22s-14.4-10-21.9-5.5l-80 48c-7.6 4.5-10 14.4-5.5 22s14.4 10 21.9 5.5l80-48zM528 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0zm-7.8 130.3c-7.6-4.5-17.4-2.1-21.9 5.5s-2.1 17.4 5.5 21.9l80 48c7.6 4.5 17.4 2.1 21.9-5.5s2.1-17.4-5.5-21.9l-80-48z" />
    </Icon>
);

export default SensorOn;