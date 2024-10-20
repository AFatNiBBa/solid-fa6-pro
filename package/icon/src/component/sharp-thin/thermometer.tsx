
import { Icon } from "../../index";

/**
 * A component that renders the `thermometer` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=sharp-thin thermometer}
 * @preview ![thermometer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/thermometer.svg)
 */
const Thermometer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M355.1 40.2C370.6 24.7 391.6 16 413.5 16C459.1 16 496 52.9 496 98.5c0 21.9-8.7 42.9-24.2 58.3L228.7 400 112 400l0-116.7 48-48 50.3 50.3 5.7 5.7L227.3 280l-5.7-5.7L171.3 224 224 171.3l50.3 50.3 5.7 5.7L291.3 216l-5.7-5.7L235.3 160 288 107.3l50.3 50.3 5.7 5.7L355.3 152l-5.7-5.7L299.3 96l55.8-55.8zM96 280l0 124.7L5.9 494.8 .2 500.5l11.3 11.3 5.7-5.7L107.3 416 232 416l3.3 0 2.3-2.3L483.1 168.2c18.5-18.5 28.9-43.5 28.9-69.7C512 44.1 467.9 0 413.5 0c-26.1 0-51.2 10.4-69.7 28.9L288 84.7 276.7 96 224 148.7 212.7 160 160 212.7 148.7 224 98.3 274.3 96 276.7l0 3.3z" />
    </Icon>
);

export default Thermometer;