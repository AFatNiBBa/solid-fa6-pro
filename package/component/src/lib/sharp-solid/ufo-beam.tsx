
import { Icon } from "../../index";

/**
 * A component that renders the `ufo-beam` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ufo-beam?s=sharp-solid ufo-beam}
 * @preview ![ufo-beam](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ufo-beam.svg)
 */
const UfoBeam: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M184 152s24 40 104 40s104-40 104-40c0-48-33.3-104-104-104s-104 56-104 104zm-42.6-40.4C159.1 47.2 218.1 0 288 0s128.9 47.2 146.6 111.6C519.2 131.1 576 167 576 208c0 61.9-128.9 112-288 112S0 269.9 0 208c0-41 56.8-76.9 141.4-96.4zM256 256l32 32 32-32-32-32-32 32zM96 176L64 208l32 32 32-32L96 176zm352 32l32 32 32-32-32-32-32 32zM74.1 326.3l4.2-9.5c14.2 5.6 29.6 10.6 45.9 15l-6.2 14-64 144-9.7 21.9L.3 492.2l9.7-21.9 64-144zm384 19.5l-6.2-14c16.3-4.4 31.6-9.4 45.9-15l4.2 9.5 64 144 9.7 21.9-43.9 19.5-9.7-21.9-64-144z" />
    </Icon>
);

export default UfoBeam;