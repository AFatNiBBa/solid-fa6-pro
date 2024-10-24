
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass-arrow-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-arrow-right?s=light magnifying-glass-arrow-right}
 * @preview ![magnifying-glass-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/magnifying-glass-arrow-right.svg)
 */
const MagnifyingGlassArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 32a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 384c51.7 0 99-18.8 135.3-50L484.7 507.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L366 343.3c31.2-36.4 50-83.7 50-135.3C416 93.1 322.9 0 208 0S0 93.1 0 208S93.1 416 208 416zm27.3-299.3c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L265.4 192 112 192c-8.8 0-16 7.2-16 16s7.2 16 16 16l153.4 0-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80z" />
    </Icon>
);

export default MagnifyingGlassArrowRight;