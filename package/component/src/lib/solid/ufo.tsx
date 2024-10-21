
import { Icon } from "../../index";

/**
 * A component that renders the `ufo` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ufo?s=solid ufo}
 * @preview ![ufo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/ufo.svg)
 */
const Ufo: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 112c59.2 0 109.6 37.9 128.3 90.7c5 14.2 7.7 29.4 7.7 45.3c0 0-40 40-136 40s-136-40-136-40c0-15.9 2.7-31.1 7.7-45.3c18.7-52.8 69-90.7 128.3-90.7zm0-48c-90.1 0-165.2 64.8-180.9 150.4C55.1 237.5 0 276.2 0 320c0 70.7 143.3 128 320 128s320-57.3 320-128c0-43.8-55.1-82.5-139.1-105.6C485.2 128.8 410.2 64 320 64zm0 288a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM104 328a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm408-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Ufo;