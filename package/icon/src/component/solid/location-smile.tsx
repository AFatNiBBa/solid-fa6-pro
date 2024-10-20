
import { Icon } from "../../index";

/**
 * A component that renders the `location-smile` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-smile?s=solid location-smile}
 * @preview ![location-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/location-smile.svg)
 */
const LocationSmile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM128 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-95.4 84.9c6.2 9.4 29.1 31.1 63.4 31.1s57.1-21.7 63.4-31.1c6.1-9.2 18.5-11.7 27.7-5.5s11.7 18.5 5.5 27.7C277.1 284.4 243.1 316 192 316s-85.1-31.6-96.6-48.9c-6.1-9.2-3.6-21.6 5.5-27.7s21.6-3.6 27.7 5.5z" />
    </Icon>
);

export default LocationSmile;