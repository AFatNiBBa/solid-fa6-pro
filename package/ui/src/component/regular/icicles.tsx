
import { Icon } from "../../index";

/**
 * A component that renders the `icicles` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/icicles?s=regular icicles}
 * @preview ![icicles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/icicles.svg)
 */
const Icicles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M5.2 9.1C9.7 3.4 16.7 0 24 0L488 0c6.9 0 13.5 3 18.1 8.2s6.6 12.2 5.7 19L448.9 483c-2.3 16.6-16.5 29-33.2 29c-15.8 0-29.4-11-32.8-26.4L332.6 256.5l-11.2 38.2c-4.4 15-18.1 25.2-33.7 25.2c-14.5 0-27.6-9-32.8-22.5l-9.4-24.6-20.2 84.9C221.5 373.1 207.8 384 192 384s-29.5-10.9-33.2-26.2l-20.2-84.9-9.5 24.8C123.9 311.1 111 320 96.6 320c-16.2 0-30.2-11.1-33.9-26.8L.6 29.5C-1 22.4 .6 14.8 5.2 9.1zM54.3 48L99.6 240.6l22-57.2c3.8-9.8 13.5-16 24-15.3s19.3 8.2 21.7 18.4L192 290l24.7-103.5c2.4-10.2 11.3-17.7 21.7-18.4s20.2 5.5 24 15.3L286 244.8 313 153.2c3.1-10.5 12.9-17.6 23.9-17.2s20.3 8.1 22.6 18.8l53 241.4L460.5 48 54.3 48z" />
    </Icon>
);

export default Icicles;