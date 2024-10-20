
import { Icon } from "../../index";

/**
 * A component that renders the `border-all` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-all?s=light border-all}
 * @preview ![border-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/border-all.svg)
 */
const BorderAll: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 64c17.7 0 32 14.3 32 32l0 144-176 0 0-176 144 0zm32 208l0 144c0 17.7-14.3 32-32 32l-144 0 0-176 176 0zM208 240L32 240 32 96c0-17.7 14.3-32 32-32l144 0 0 176zM32 272l176 0 0 176L64 448c-17.7 0-32-14.3-32-32l0-144zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </Icon>
);

export default BorderAll;