
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paw-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paw-simple?s=sharp-duotone-solid paw-simple}
 * @preview ![paw-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/paw-simple.svg)
 */
const PawSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192a48 48 0 1 0 96 0A48 48 0 1 0 0 192zM96 80a48 48 0 1 0 96 0A48 48 0 1 0 96 80zm160 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm96 112a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M176 160L107.7 283C64.2 293.8 32 333.2 32 380c0 55.2 44.8 100 100 100c24.8 0 47.5-9 65-24l54 0c17.5 15 40.2 24 65 24c55.2 0 100-44.8 100-100c0-46.8-32.2-86.2-75.7-97L272 160l-96 0z" />
    </Icon>
);

export default PawSimple;