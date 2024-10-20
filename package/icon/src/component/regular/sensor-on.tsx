
import { Icon } from "../../index";

/**
 * A component that renders the `sensor-on` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-on?s=regular sensor-on}
 * @preview ![sensor-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sensor-on.svg)
 */
const SensorOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm56 96c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm96 0c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm381.3-20c11-7.4 14-22.3 6.7-33.3s-22.3-14-33.3-6.7l-48 32c-11 7.4-14 22.3-6.7 33.3s22.3 14 33.3 6.7l48-32zM536 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm13.3 140c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l48 32c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3l-48-32z" />
    </Icon>
);

export default SensorOn;