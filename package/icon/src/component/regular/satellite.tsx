
import { Icon } from "../../index";

/**
 * A component that renders the `satellite` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/satellite?s=regular satellite}
 * @preview ![satellite](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/satellite.svg)
 */
const Satellite: typeof Icon = x => (
    <Icon {...x}>
        <path d="M241 7c-9.4-9.4-24.6-9.4-33.9 0L95 119c-9.4 9.4-9.4 24.6 0 33.9l58.1 58.1c-50.9-9.8-105.5 3.2-147.2 39.7c-3.8 3.3-5.9 8-5.9 13l0 .5c0 4.9 1.9 9.6 5.4 13L103 375 55 423c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l48-48 97.6 97.6c3.5 3.5 8.1 5.4 13 5.4l.5 0c5 0 9.8-2.2 13-5.9c36.5-41.7 49.6-96.3 39.7-147.2L359 417c9.4 9.4 24.6 9.4 33.9 0L505 305c9.4-9.4 9.4-24.6 0-33.9l-68-68L463 177c10.9-10.9 17-25.6 17-41s-6.1-30.1-17-41L417 49c-10.9-10.9-25.6-17-41-17s-30.1 6.1-41 17L309 75 241 7zm34.6 289.5c-6.4-9.7-13.8-18.8-22.3-27.3l-10.6-10.6c-8.5-8.5-17.6-15.9-27.3-22.3L369 82.9c1.9-1.9 4.4-2.9 7-2.9s5.2 1 7 2.9L429.1 129c1.9 1.9 2.9 4.4 2.9 7s-1 5.2-2.9 7L275.6 296.6zM275 109L197 187l-51-51L224 57.9l51 51zM376 366.1l-51-51L403 237l51 51L376 366.1zM219.4 303.2c38.8 38.8 47.1 97 23.8 144.1L64.7 268.8c47.1-23.2 105.3-14.9 144.1 23.8l10.6 10.6z" />
    </Icon>
);

export default Satellite;