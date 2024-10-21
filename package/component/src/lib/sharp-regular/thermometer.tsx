
import { Icon } from "../../index";

/**
 * A component that renders the `thermometer` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=sharp-regular thermometer}
 * @preview ![thermometer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/thermometer.svg)
 */
const Thermometer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M369.8 64.2c10.4-10.4 24.4-16.2 39-16.2c30.5 0 55.2 24.7 55.2 55.2c0 14.6-5.8 28.7-16.2 39L222.1 368 144 368l0-78.1 29.7-29.7 31 31L216 302.6 238.6 280l-11.3-11.3-31-31 41.4-41.4 31 31L280 238.6 302.6 216l-11.3-11.3-31-31 41.4-41.4 31 31L344 174.6 366.6 152l-11.3-11.3-31-31 45.5-45.5zM96 280l0 102.1L18.2 459.8l-17 17 33.9 33.9 17-17L129.9 416 232 416l9.9 0 7-7L481.8 176.2c19.4-19.4 30.2-45.6 30.2-73C512 46.2 465.8 0 408.8 0c-27.4 0-53.6 10.9-73 30.2L103 263l-7 7 0 9.9z" />
    </Icon>
);

export default Thermometer;