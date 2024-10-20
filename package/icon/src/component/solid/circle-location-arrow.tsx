
import { Icon } from "../../index";

/**
 * A component that renders the `circle-location-arrow` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-location-arrow?s=solid circle-location-arrow}
 * @preview ![circle-location-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-location-arrow.svg)
 */
const CircleLocationArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM358.2 182.7l-84 196c-3.5 8.1-11.4 13.3-20.2 13.3c-1.4 0-2.9-.1-4.4-.4C239.4 389.5 232 380.4 232 370l0-90-90 0c-10.4 0-19.5-7.4-21.5-17.6c-2.1-10.2 3.3-20.5 12.9-24.6l196-84c8.5-3.5 18-1.7 24.2 4.7c6.4 6.3 8.2 15.9 4.7 24.2z" />
    </Icon>
);

export default CircleLocationArrow;