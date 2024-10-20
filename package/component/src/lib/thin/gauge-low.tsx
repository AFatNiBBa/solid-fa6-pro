
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-low` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-low?s=thin gauge-low}
 * @preview ![gauge-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/gauge-low.svg)
 */
const GaugeLow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm16 80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM208 352a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm-16 0c0-22.2 11.3-41.7 28.4-53.2L136.8 131.6c-2-4-.4-8.8 3.6-10.7s8.8-.4 10.7 3.6l83.6 167.2c6.6-2.3 13.8-3.6 21.2-3.6c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64zM384 128a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm32 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM112 240a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
    </Icon>
);

export default GaugeLow;