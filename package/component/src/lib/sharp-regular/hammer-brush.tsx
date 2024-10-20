
import { Icon } from "../../index";

/**
 * A component that renders the `hammer-brush` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-brush?s=sharp-regular hammer-brush}
 * @preview ![hammer-brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hammer-brush.svg)
 */
const HammerBrush: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M136 0C60.9 0 0 60.9 0 136l0 32 0 36.4 33.5-14.3 41.1-17.6L87 185l7 7 9.9 0 13.8 0L96 512l128 0L202.2 192l45.8 0 24 0 0-24 0-8 32 0 0 32 48 0 0-32s0 0 0 0l0-24 0-80 0-24s0 0 0 0l0-32L304 0l0 32-32 0 0-8 0-24L248 0 136 0zM304 112l-56 0-24 0 0 24 0 8-110.1 0L97 127 85.5 115.5l-14.9 6.4-22.4 9.6C50.4 85 88.9 48 136 48l88 0 0 8 0 24 24 0 56 0 0 32zm96 208l192 0 0 144-112 0 0-48 0-16-32 0 0 16 0 48-48 0 0-144zm48-128l-96 64 0 208 0 48 48 0 192 0 48 0 0-48 0-208-96-64L544 0 448 0l0 192zM480 48a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default HammerBrush;