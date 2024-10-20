
import { Icon } from "../../index";

/**
 * A component that renders the `wind-turbine` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-turbine?s=thin wind-turbine}
 * @preview ![wind-turbine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/wind-turbine.svg)
 */
const WindTurbine: typeof Icon = x => (
    <Icon {...x}>
        <path d="M301 214.3c-1-6.8 .2-13.8 3.5-19.9L396.9 23.6 244.7 144.2c-5.4 4.3-12.1 6.7-19 6.9L31.6 156.5l180.6 71.5c6.4 2.5 11.9 7.1 15.5 13L329.4 406.5 301 214.3zm44.2 189.8c2.5 17.2-20.3 25.5-29.5 10.7L288 369.7l-16-26-32-52-16-26-10-16.3c-1.8-2.9-4.5-5.2-7.7-6.5L25.7 171.4C9.5 165 13.7 141 31.1 140.6l194.1-5.4c3.5-.1 6.8-1.3 9.5-3.5L387 11c13.6-10.8 32.3 4.8 24 20.1L318.6 202c-1.6 3-2.3 6.5-1.8 9.9l28.4 192.1zM240 352.8L240 496l32 0 0-91.2 16 26 0 65.2 88 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-96 0-48 0-96 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l88 0 0-169.2 16 26zM256 184a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default WindTurbine;