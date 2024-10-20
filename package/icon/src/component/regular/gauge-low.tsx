
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-low` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-low?s=regular gauge-low}
 * @preview ![gauge-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/gauge-low.svg)
 */
const GaugeLow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm32 112a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM256 408c-30.9 0-56-25.1-56-56c0-14 5.1-26.8 13.7-36.6L146 161.7c-5.3-12.1 .2-26.3 12.3-31.6s26.3 .2 31.6 12.3L257.6 296c30.2 .8 54.4 25.6 54.4 56c0 30.9-25.1 56-56 56zM384 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm16 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM144 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
    </Icon>
);

export default GaugeLow;