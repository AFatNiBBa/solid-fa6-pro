
import { Icon } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=light light-ceiling}
 * @preview ![light-ceiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/light-ceiling.svg)
 */
const LightCeiling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c8.8 0 16 7.2 16 16l0 144.5c123.3 7.6 223 102.5 238 223.6c2.2 17.5-12.4 31.9-30 31.9L32 416C14.3 416-.2 401.6 2 384.1C17 262.9 116.7 168.1 240 160.5L240 16c0-8.8 7.2-16 16-16zM34.3 384l443.5 0C462.2 275.5 368.8 192 256 192S49.8 275.5 34.3 384zM256 512c-38.7 0-71-27.5-78.4-64l33.1 0c6.6 18.6 24.4 32 45.3 32s38.7-13.4 45.3-32l33.1 0c-7.4 36.5-39.7 64-78.4 64z" />
    </Icon>
);

export default LightCeiling;