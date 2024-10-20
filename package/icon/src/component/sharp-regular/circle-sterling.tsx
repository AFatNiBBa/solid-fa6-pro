
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sterling` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sterling?s=sharp-regular circle-sterling}
 * @preview ![circle-sterling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-sterling.svg)
 */
const CircleSterling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm261.5-96c-16.8 0-30.4 13.7-30.3 30.5l.2 33.5 40.5 0 16 0 0 32-16 0-40.3 0 .3 41.2 0 5.9-2.7 5.3-6 11.6L328 320l24 0 0 48-24 0-144 0-39.3 0 18-35L184 291.6l-.3-35.6-7.7 0-16 0 0-32 16 0 7.5 0-.2-33.1c-.3-43.5 34.8-78.9 78.3-78.9c10 0 19.8 1.9 29.1 5.6l30.3 12.1 22.3 8.9-17.8 44.6-22.3-8.9-30.3-12.1c-3.6-1.4-7.4-2.2-11.3-2.2z" />
    </Icon>
);

export default CircleSterling;