
import { Icon } from "../../index";

/**
 * A component that renders the `expand` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand?s=light expand}
 * @preview ![expand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/expand.svg)
 */
const Expand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 32c8.8 0 16 7.2 16 16s-7.2 16-16 16L32 64l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 48c0-8.8 7.2-16 16-16l128 0zM0 336c0-8.8 7.2-16 16-16s16 7.2 16 16l0 112 112 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 480c-8.8 0-16-7.2-16-16L0 336zM432 32c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112L304 64c-8.8 0-16-7.2-16-16s7.2-16 16-16l128 0zM416 336c0-8.8 7.2-16 16-16s16 7.2 16 16l0 128c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l112 0 0-112z" />
    </Icon>
);

export default Expand;