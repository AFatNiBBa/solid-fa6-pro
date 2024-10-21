
import { Icon } from "../../index";

/**
 * A component that renders the `planet-moon` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/planet-moon?s=solid planet-moon}
 * @preview ![planet-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/planet-moon.svg)
 */
const PlanetMoon: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 0a64 64 0 1 1 0 128A64 64 0 1 1 512 0zM0 288a224 224 0 1 1 448 0A224 224 0 1 1 0 288zM236.2 112.4c-4-.3-8.1-.4-12.2-.4c-76.2 0-141.1 48.4-165.6 116.2C53.3 242.3 64.7 256 79.7 256l28.4 0c12.7 0 24.9 5.1 33.9 14.1L185 313c4.5 4.5 7 10.6 7 17l0 22.1c0 9.2 3.9 17.6 10.2 23.4l1.9 1.8c9.3 8.6 19.9 18.4 19.9 30.8l0 23c0 13.8 11.2 25 25 25c9.2 0 17.7-5.1 22-13.2l41.3-76.6c5-9.3 7.6-19.8 7.6-30.3l0-15.9c0-17.7-14.3-32-32-32l-65.9 0c-9 0-17.7-3.6-24.1-10c-12.5-12.5-13.4-32.4-2.1-45.9l52.7-63.2c4.8-5.8 7.4-13 7.4-20.5l0-13.5c0-11.6-8.3-21.7-19.8-22.5z" />
    </Icon>
);

export default PlanetMoon;