
import { Icon } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=sharp-thin light-ceiling}
 * @preview ![light-ceiling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/light-ceiling.svg)
 */
const LightCeiling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16.5 400l479 0C487.2 274.9 383.2 176 256 176S24.8 274.9 16.5 400zM248 160.1L248 0l16 0 0 160.1C396.3 164.2 503.4 268.7 511.5 400c.3 5.3 .5 10.6 .5 16l-16 0L16 416 0 416c0-5.4 .2-10.7 .5-16C8.6 268.7 115.7 164.2 248 160.1zM256 512c-35.3 0-64-28.7-64-64l16 0c0 26.5 21.5 48 48 48s48-21.5 48-48l16 0c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default LightCeiling;