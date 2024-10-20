
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bath` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bath?s=sharp-duotone-solid bath}
 * @preview ![bath](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bath.svg)
 */
const Bath: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 0L64 0l64 0 13.3 0 9.4 9.4 28.1 28.1C187.8 34 197.7 32 208 32c19.6 0 37.5 7 51.4 18.7L272 38.1 305.9 72 289 89 185 193l-17 17L134.1 176l12.6-12.6C135 149.5 128 131.6 128 112c0-10.3 2-20.2 5.5-29.2L114.7 64 96 64l0 192-64 0L32 32 32 0z" />
        <path d="M32 256L0 256l0 64 32 0 448 0 32 0 0-64-32 0L32 256zm448 96L32 352l0 16c0 28.4 12.4 54 32 71.6L64 480l0 32 64 0 0-32 0-16 256 0 0 16 0 32 64 0 0-32 0-40.4c19.6-17.6 32-43.1 32-71.6l0-16z" />
    </Icon>
);

export default Bath;