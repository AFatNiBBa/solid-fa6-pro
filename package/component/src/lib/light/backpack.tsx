
import { Icon } from "../../index";

/**
 * A component that renders the `backpack` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backpack?s=light backpack}
 * @preview ![backpack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/backpack.svg)
 */
const Backpack: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 32l64 0c8.8 0 16 7.2 16 16l0 16-96 0 0-16c0-8.8 7.2-16 16-16zM144 48l0 16-16 0C57.3 64 0 121.3 0 192L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256c0-70.7-57.3-128-128-128l-16 0 0-16c0-26.5-21.5-48-48-48L192 0c-26.5 0-48 21.5-48 48zm16 48l128 0 32 0c53 0 96 43 96 96l0 256c0 17.7-14.3 32-32 32l-16 0 0-112 0-48c0-35.3-28.7-64-64-64l-160 0c-35.3 0-64 28.7-64 64l0 48 0 112-16 0c-17.7 0-32-14.3-32-32l0-256c0-53 43-96 96-96l32 0zM112 480l0-96 224 0 0 96-224 0zm32-320c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0zM336 352l-224 0 0-32c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 32z" />
    </Icon>
);

export default Backpack;