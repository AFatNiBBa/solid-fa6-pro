
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin-lock?s=sharp-light location-pin-lock}
 * @preview ![location-pin-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/location-pin-lock.svg)
 */
const LocationPinLock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M197.6 457.1c16.1-19 37.1-44.7 58.4-73.5l0 52.7c-16.4 20.7-31.3 38.6-42.7 51.7C200.2 503.1 192 512 192 512s-8.2-8.9-21.3-24.1C120.7 429.9 0 280.8 0 192C0 86 86 0 192 0c95.7 0 175 70 189.6 161.5c-10.9 1.8-21.3 5.2-30.9 9.9C340.6 92.8 273.4 32 192 32C103.6 32 32 103.6 32 192c0 20.2 9.1 48.6 26.5 82.7c16.9 33.2 39.9 68.2 63.4 100.5c23.4 32.2 46.9 61 64.5 81.9c1.9 2.3 3.8 4.5 5.6 6.6c1.8-2.1 3.6-4.3 5.6-6.6zM144 192a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160zm208-48c-26.5 0-48 21.5-48 48l0 48 96 0 0-48c0-26.5-21.5-48-48-48zm-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 32 0 128 0 32-32 0-160 0-32 0 0-32 0-128 0-32 32 0 0-48zm0 80l0 128 160 0 0-128-160 0z" />
    </Icon>
);

export default LocationPinLock;