
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sterling` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sterling?s=light circle-sterling}
 * @preview ![circle-sterling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-sterling.svg)
 */
const CircleSterling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM259.6 144c-20.2 0-36.5 16.5-36.4 36.7l.3 43.3 48.5 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48.4 0c-.9 22.5-7.1 44.4-18 64L328 320c8.8 0 16 7.2 16 16s-7.2 16-16 16l-152 0c-5.9 0-11.4-3.3-14.2-8.5s-2.4-11.6 1-16.5l9.2-13.5c11.7-17 18.4-36.9 19.5-57.5L176 256c-8.8 0-16-7.2-16-16s7.2-16 16-16l15.5 0-.3-43.1c-.3-38 30.4-68.9 68.4-68.9c10.6 0 21.1 2.5 30.6 7.2l20.9 10.5c7.9 4 11.1 13.6 7.2 21.5s-13.6 11.1-21.5 7.2l-20.9-10.5c-5.1-2.5-10.6-3.8-16.3-3.8z" />
    </Icon>
);

export default CircleSterling;