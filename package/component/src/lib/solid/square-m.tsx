
import { Icon } from "../../index";

/**
 * A component that renders the `square-m` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-m?s=solid square-m}
 * @preview ![square-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-m.svg)
 */
const SquareM: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm75.5 105.9L224 255l84.5-117.1c6.1-8.4 16.9-12 26.8-8.8s16.6 12.4 16.6 22.8l0 208c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-133.8-60.5 83.8c-4.5 6.2-11.7 9.9-19.5 9.9s-14.9-3.7-19.5-9.9L144 226.2 144 360c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-208c0-10.4 6.7-19.6 16.6-22.8s20.7 .3 26.8 8.8z" />
    </Icon>
);

export default SquareM;