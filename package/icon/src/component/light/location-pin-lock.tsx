
import { Icon } from "../../index";

/**
 * A component that renders the `location-pin-lock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin-lock?s=light location-pin-lock}
 * @preview ![location-pin-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/location-pin-lock.svg)
 */
const LocationPinLock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 477.6c16.8-21.1 40.2-51.4 64-85.5l0 54.8c-15.3 20.6-29.3 38.6-40.3 52.3c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0c95.7 0 175 70 189.6 161.5c-10.9 1.8-21.3 5.2-30.9 9.9C340.6 92.8 273.4 32 192 32C103.6 32 32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140zM144 192a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160zm208-48c-26.5 0-48 21.5-48 48l0 48 96 0 0-48c0-26.5-21.5-48-48-48zm-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l0-48zm0 80l0 128 160 0 0-128-160 0z" />
    </Icon>
);

export default LocationPinLock;