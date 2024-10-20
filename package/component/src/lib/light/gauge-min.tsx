
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-min` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-min?s=light gauge-min}
 * @preview ![gauge-min](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gauge-min.svg)
 */
const GaugeMin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM280 96a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0c0-35.3-28.7-64-64-64c-17.5 0-33.4 7-44.9 18.4L104.2 242.3c-7.6-4.5-17.4-2.1-22 5.5s-2.1 17.4 5.5 22l106.8 64.1c-1.7 5.8-2.6 11.9-2.6 18.2c0 35.3 28.7 64 64 64s64-28.7 64-64zM168 144a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM416 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM392 144a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default GaugeMin;