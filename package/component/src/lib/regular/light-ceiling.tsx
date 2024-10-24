
import { Icon } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=regular light-ceiling}
 * @preview ![light-ceiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/light-ceiling.svg)
 */
const LightCeiling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 137.1C112.4 172.2 16.7 265.6 2 384.1C-.2 401.6 14.3 416 32 416l448 0c17.7 0 32.2-14.4 30-31.9c-14.7-118.5-110.5-211.8-230-223L280 24zM458.4 368L53.6 368C75.2 276.3 157.7 208 256 208s180.8 68.3 202.4 160zM256 512c35.3 0 64-28.7 64-64l-128 0c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default LightCeiling;