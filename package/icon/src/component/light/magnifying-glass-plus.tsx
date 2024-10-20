
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-plus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-plus?s=light magnifying-glass-plus}
 * @preview ![magnifying-glass-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/magnifying-glass-plus.svg)
 */
const MagnifyingGlassPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 32a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 384c51.7 0 99-18.8 135.3-50L484.7 507.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L366 343.3c31.2-36.4 50-83.7 50-135.3C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zM192 304c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0 0-80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 80z" />
    </Icon>
);

export default MagnifyingGlassPlus;