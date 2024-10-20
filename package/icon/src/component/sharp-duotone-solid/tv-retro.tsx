
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tv-retro` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv-retro?s=sharp-duotone-solid tv-retro}
 * @preview ![tv-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tv-retro.svg)
 */
const TvRetro: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 512l512 0 0-416L321.9 96l39-39 17-17L344 6.1 327 23l-71 71L185 23l-17-17L134.1 40l17 17 39 39L0 96zm64 64c106.7 0 213.3 0 320 0l0 288L64 448l0-288zm408 72a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M64 160H384V448H64V160z" />
    </Icon>
);

export default TvRetro;