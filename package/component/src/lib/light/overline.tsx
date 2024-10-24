
import { Icon } from "../../index";

/**
 * A component that renders the `overline` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/overline?s=light overline}
 * @preview ![overline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/overline.svg)
 */
const Overline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 32zm208 96c-88.4 0-160 71.6-160 160l0 32c0 88.4 71.6 160 160 160s160-71.6 160-160l0-32c0-88.4-71.6-160-160-160zM96 288c0-70.7 57.3-128 128-128s128 57.3 128 128l0 32c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-32z" />
    </Icon>
);

export default Overline;