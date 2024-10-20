
import { Icon } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=solid light-ceiling}
 * @preview ![light-ceiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/light-ceiling.svg)
 */
const LightCeiling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c17.7 0 32 14.3 32 32l0 130c115.8 14.4 207.6 106.3 222 222.1c2.2 17.5-12.4 31.9-30 31.9L32 416C14.3 416-.2 401.6 2 384.1C16.4 268.2 108.2 176.4 224 162l0-130c0-17.7 14.3-32 32-32zm0 512c-35.3 0-64-28.7-64-64l128 0c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default LightCeiling;