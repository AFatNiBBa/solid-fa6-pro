
import { Icon } from "../../index";

/**
 * A component that renders the `sensor-on` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-on?s=thin sensor-on}
 * @preview ![sensor-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sensor-on.svg)
 */
const SensorOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM88 96c-4.4 0-8 3.6-8 8l0 176c0 4.4 3.6 8 8 8s8-3.6 8-8l0-176c0-4.4-3.6-8-8-8zm64 0c-4.4 0-8 3.6-8 8l0 176c0 4.4 3.6 8 8 8s8-3.6 8-8l0-176c0-4.4-3.6-8-8-8zM604.1 78.9c3.8-2.3 5-7.2 2.7-11s-7.2-5-11-2.7l-80 48c-3.8 2.3-5 7.2-2.7 11s7.2 5 11 2.7l80-48zM520 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l112 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-112 0zm4.1 137.1c-3.8-2.3-8.7-1-11 2.7s-1 8.7 2.7 11l80 48c3.8 2.3 8.7 1 11-2.7s1-8.7-2.7-11l-80-48z" />
    </Icon>
);

export default SensorOn;