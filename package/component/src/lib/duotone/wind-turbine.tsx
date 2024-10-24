
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wind-turbine` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-turbine?s=duotone wind-turbine}
 * @preview ![wind-turbine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wind-turbine.svg)
 */
const WindTurbine: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 488c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0 0-94.3c-21.3-34.7-42.7-69.3-64-104L224 464l-72 0c-13.3 0-24 10.7-24 24z" />
        <path d="M345.2 404.1c2.5 17.2-20.3 25.5-29.5 10.7L214 249.4c-1.8-2.9-4.5-5.2-7.7-6.5L25.7 171.4C9.5 165 13.7 141 31.1 140.6l194.1-5.4c3.5-.1 6.8-1.3 9.5-3.5L387 11c13.6-10.8 32.3 4.8 24 20.1L318.6 202c-1.6 3-2.3 6.5-1.8 9.9l28.4 192.1zM256 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default WindTurbine;