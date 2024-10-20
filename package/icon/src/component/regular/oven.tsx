
import { Icon } from "../../index";

/**
 * A component that renders the `oven` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oven?s=regular oven}
 * @preview ![oven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/oven.svg)
 */
const Oven: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 48c26.5 0 48 21.5 48 48l0 64L48 160l0-64c0-26.5 21.5-48 48-48l256 0zm48 160l0 240c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-240 352 0zM96 0C43 0 0 43 0 96L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-352c0-53-43-96-96-96L96 0zm32 104a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm104-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM112 240c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-224 0zm32 48l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default Oven;