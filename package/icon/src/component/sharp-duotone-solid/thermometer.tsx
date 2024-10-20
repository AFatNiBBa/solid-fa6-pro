
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thermometer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=sharp-duotone-solid thermometer}
 * @preview ![thermometer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/thermometer.svg)
 */
const Thermometer: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.3 476.8l33.9 33.9 17-17L129.9 416 232 416l9.9 0 7-7L481.8 176.2c19.4-19.4 30.2-45.6 30.2-73C512 46.2 465.8 0 408.8 0c-27.4 0-53.6 10.9-73 30.2L290.3 75.7l57 57c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6c-3.8-3.8-7.5-7.5-11.3-11.3c-19-19-38-38-57-57c-13.8 13.8-27.6 27.6-41.4 41.4c19 19 38 38 57 57c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6l-11.3-11.3-57-57c-13.8 13.8-27.6 27.6-41.4 41.4c19 19 38 38 57 57c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6l-11.3-11.3-57-57c-12.2 12.2-24.5 24.5-36.7 36.7l-7 7 0 9.9 0 102.1L18.2 459.8l-17 17z" />
        <path d="M139.7 226.3l57 57L208 294.6 230.6 272l-11.3-11.3-57-57-22.6 22.6zm64-64l57 57L272 230.6 294.6 208l-11.3-11.3-57-57-22.6 22.6zm64-64l57 57L336 166.6 358.6 144l-11.3-11.3-57-57L267.7 98.3z" />
    </Icon>
);

export default Thermometer;