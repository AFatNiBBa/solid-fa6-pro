
import { Icon } from "../../index";

/**
 * A component that renders the `border-all` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-all?s=thin border-all}
 * @preview ![border-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/border-all.svg)
 */
const BorderAll: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c26.5 0 48 21.5 48 48l0 144-208 0 0-192 160 0zm48 208l0 160c0 26.5-21.5 48-48 48l-160 0 0-208 208 0zM208 240L16 240 16 96c0-26.5 21.5-48 48-48l144 0 0 192zM16 256l192 0 0 208L64 464c-26.5 0-48-21.5-48-48l0-160zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </Icon>
);

export default BorderAll;