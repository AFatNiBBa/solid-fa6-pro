
import { Icon } from "../../index";

/**
 * A component that renders the `square-q` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-q?s=solid square-q}
 * @preview ![square-q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-q.svg)
 */
const SquareQ: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 224c0 44.2 35.8 80 80 80c13.4 0 25.9-3.3 37-9.1l-30-30c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l30 30c5.8-11.1 9.1-23.7 9.1-37c0-44.2-35.8-80-80-80s-80 35.8-80 80zm208 0c0 26.7-8.2 51.4-22.1 71.9L345 343c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15.1-15.1c-20.5 14-45.3 22.1-71.9 22.1c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128z" />
    </Icon>
);

export default SquareQ;