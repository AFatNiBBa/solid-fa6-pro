
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-min` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-min?s=solid gauge-min}
 * @preview ![gauge-min](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/gauge-min.svg)
 */
const GaugeMin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64s-28.7-64-64-64c-14.1 0-27.2 4.6-37.8 12.4L100.6 227.6c-11.3-7-26.1-3.5-33 7.8s-3.5 26.1 7.8 33l117.5 72.8c-.6 3.5-.9 7.1-.9 10.8c0 35.3 28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM416 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default GaugeMin;