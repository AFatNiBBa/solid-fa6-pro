
import { Icon } from "../../index";

/**
 * A component that renders the `thermometer` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=thin thermometer}
 * @preview ![thermometer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/thermometer.svg)
 */
const Thermometer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M355.1 40.2L299.3 96l50.3 50.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L288 107.3 235.3 160l50.3 50.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L224 171.3 171.3 224l50.3 50.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L160 235.3l-36.3 36.3c-7.5 7.5-11.7 17.7-11.7 28.3L112 400l100.1 0c10.6 0 20.8-4.2 28.3-11.7L471.8 156.9c15.5-15.5 24.2-36.5 24.2-58.3C496 52.9 459.1 16 413.5 16c-21.9 0-42.9 8.7-58.3 24.2zM282.4 90.3l61.5-61.5C362.3 10.4 387.4 0 413.5 0C467.9 0 512 44.1 512 98.5c0 26.1-10.4 51.2-28.9 69.7L251.7 399.6C241.2 410.1 227 416 212.1 416l-104.8 0L13.7 509.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L96 404.7l0-104.8c0-14.9 5.9-29.1 16.4-39.6l41.9-41.9s0 0 0 0s0 0 0 0l64-64s0 0 0 0s0 0 0 0l64-64s0 0 0 0s0 0 0 0z" />
    </Icon>
);

export default Thermometer;