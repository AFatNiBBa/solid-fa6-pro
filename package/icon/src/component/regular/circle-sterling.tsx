
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sterling` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sterling?s=regular circle-sterling}
 * @preview ![circle-sterling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-sterling.svg)
 */
const CircleSterling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm261.5-96c-16.8 0-30.4 13.7-30.3 30.5l.2 33.5 40.5 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-40.3 0 .1 9.7c.1 18.6-3.1 37-9.6 54.3L328 320c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-8.4 0-16.1-4.4-20.5-11.5s-4.7-16-.8-23.5l9.6-18.6c7.7-14.9 11.6-31.5 11.5-48.3l-.1-10.1-7.7 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l7.5 0-.2-33.1c-.3-43.5 34.8-78.9 78.3-78.9c10 0 19.8 1.9 29.1 5.6l30.3 12.1c12.3 4.9 18.3 18.9 13.4 31.2s-18.9 18.3-31.2 13.4l-30.3-12.1c-3.6-1.4-7.4-2.2-11.3-2.2z" />
    </Icon>
);

export default CircleSterling;