
import { Icon } from "../../index";

/**
 * A component that renders the `border-top-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-top-left?s=light border-top-left}
 * @preview ![border-top-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/border-top-left.svg)
 */
const BorderTopLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 448c0 8.8 7.2 16 16 16s16-7.2 16-16L32 96c0-17.7 14.3-32 32-32l352 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 32C28.7 32 0 60.7 0 96L0 448zm128-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm192 0a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm-96 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm192-48a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0-144a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 48a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0-144a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default BorderTopLeft;