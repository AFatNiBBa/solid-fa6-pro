
import { Icon } from "../../index";

/**
 * A component that renders the `thermometer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=sharp-solid thermometer}
 * @preview ![thermometer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/thermometer.svg)
 */
const Thermometer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 382.1L96 280l0-9.9 7-7 36.7-36.7 57 57L208 294.6 230.6 272l-11.3-11.3-57-57 41.4-41.4 57 57L272 230.6 294.6 208l-11.3-11.3-57-57 41.4-41.4 57 57L336 166.6 358.6 144l-11.3-11.3-57-57 45.5-45.5C355.2 10.9 381.4 0 408.8 0C465.8 0 512 46.2 512 103.2c0 27.4-10.9 53.6-30.2 73L249 409l-7 7-9.9 0-102.1 0L52.2 493.8l-17 17L1.3 476.8l17-17L96 382.1z" />
    </Icon>
);

export default Thermometer;