
import { Icon } from "../../index";

/**
 * A component that renders the `screwdriver` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=light screwdriver}
 * @preview ![screwdriver](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/screwdriver.svg)
 */
const Screwdriver: typeof Icon = x => (
    <Icon {...x}>
        <path d="M447.3 34.6l30.1 30.1L404.1 160 352 160l0-52.1 95.3-73.3zM342.7 192c.4 0 .9 0 1.3 0l64 0c7.5 0 14.5-3.5 19-9.4l80-104c7.4-9.6 6.5-23.1-2.1-31.6L465 7c-8.5-8.5-22-9.4-31.6-2.1l-104 80c-5.9 4.5-9.4 11.6-9.4 19l0 64c0 .4 0 .9 0 1.3l-78.9 78.9c4.2 3.2 8.3 6.6 12.1 10.5s7.3 7.9 10.5 12.1L342.7 192zM208 304c17.7 17.7 17.7 46.3 0 64L96 480 32 416 144 304c17.7-17.7 46.3-17.7 64 0zm-86.6-22.6l-112 112c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l112-112c30.2-30.2 30.2-79.1 0-109.3s-79.1-30.2-109.3 0z" />
    </Icon>
);

export default Screwdriver;