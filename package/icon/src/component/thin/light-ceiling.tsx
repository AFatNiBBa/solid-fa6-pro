
import { Icon } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=thin light-ceiling}
 * @preview ![light-ceiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/light-ceiling.svg)
 */
const LightCeiling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c4.4 0 8 3.6 8 8l0 152.1C390.9 164 494.6 260.3 510 384.1c2.2 17.5-12.4 31.9-30 31.9L32 416C14.3 416-.2 401.6 2 384.1C17.4 260.3 121.1 164 248 160.1L248 8c0-4.4 3.6-8 8-8zM17.9 386c-.8 6.7 4.7 14 14.1 14l448 0c9.4 0 15-7.3 14.2-14C479.4 267.6 378.4 176 256 176S32.6 267.6 17.9 386zM256 512c-35.3 0-64-28.7-64-64l16 0c0 26.5 21.5 48 48 48s48-21.5 48-48l16 0c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default LightCeiling;