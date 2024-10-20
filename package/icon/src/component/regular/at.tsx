
import { Icon } from "../../index";

/**
 * A component that renders the `at` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/at?s=regular at}
 * @preview ![at](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/at.svg)
 */
const At: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208c13.3 0 24 10.7 24 24s-10.7 24-24 24C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 28c0 50.8-41.2 92-92 92c-31.1 0-58.7-15.5-75.3-39.2C322.7 360.9 291.1 376 256 376c-66.3 0-120-53.7-120-120s53.7-120 120-120c28.8 0 55.2 10.1 75.8 27c4.3-6.6 11.7-11 20.2-11c13.3 0 24 10.7 24 24l0 80 0 28c0 24.3 19.7 44 44 44s44-19.7 44-44l0-28c0-114.9-93.1-208-208-208zm72 208a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z" />
    </Icon>
);

export default At;