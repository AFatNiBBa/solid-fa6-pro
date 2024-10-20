
import { Icon } from "../../index";

/**
 * A component that renders the `thermometer` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=regular thermometer}
 * @preview ![thermometer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/thermometer.svg)
 */
const Thermometer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M369.8 64.2c10.3-10.4 24.4-16.2 39-16.2c30.5 0 55.2 24.7 55.2 55.2c0 14.6-5.8 28.7-16.2 39L224.4 365.7c-1.5 1.5-3.5 2.3-5.7 2.3L144 368l0-74.7c0-2.1 .8-4.2 2.3-5.7l27.3-27.3 31 31c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-31-31 41.4-41.4 31 31c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-31-31 41.4-41.4 31 31c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-31-31 45.5-45.5zM96 293.3l0 88.8L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l89-89 88.8 0c14.9 0 29.1-5.9 39.6-16.4L481.8 176.2c19.4-19.4 30.2-45.6 30.2-73C512 46.2 465.8 0 408.8 0c-27.4 0-53.6 10.9-73 30.2L112.4 253.7C101.9 264.2 96 278.4 96 293.3z" />
    </Icon>
);

export default Thermometer;