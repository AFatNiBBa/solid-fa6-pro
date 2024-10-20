
import { Icon } from "../../index";

/**
 * A component that renders the `map` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map?s=thin map}
 * @preview ![map](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/map.svg)
 */
const Map: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M181.3 32.5c1.6-.6 3.4-.6 5.1-.1L391.8 95.6 533.1 44.2c20.9-7.6 42.9 7.9 42.9 30.1l0 316.9c0 13.5-8.4 25.5-21.1 30.1L394.7 479.5c-1.6 .6-3.4 .6-5.1 .1L184.2 416.4 42.9 467.8C22.1 475.4 0 459.9 0 437.7L0 120.8c0-13.5 8.4-25.5 21.1-30.1L181.3 32.5zM26.5 105.8c-6.3 2.3-10.5 8.3-10.5 15l0 316.9c0 11.1 11 18.8 21.5 15L176 402.4l0-351L26.5 105.8zM384 461.2l0-351.3L192 50.8l0 351.3 192 59.1zm16-.6l149.5-54.4c6.3-2.3 10.5-8.3 10.5-15l0-316.9c0-11.1-11-18.8-21.5-15L400 109.6l0 351z" />
    </Icon>
);

export default Map;