
import { Icon, generic } from "../../index";

/**
 * A component that renders the `starship-freighter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/starship-freighter?s=sharp-duotone-solid starship-freighter}
 * @preview ![starship-freighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/starship-freighter.svg)
 */
const StarshipFreighter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 132.3 100.3 32 224 32c42.3 0 84.2 7.9 123.6 23.2L576 144l0 80-130.3 0L416 224l0 64 29.7 0L576 288l0 80-96 37.3 0-21.3-48 0-48.4 0L301.1 277.3c1.9-6.8 2.9-13.9 2.9-21.3c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80l1.2 0L322 461.4c.9 1.2 1.8 2.3 2.7 3.5C292.1 474.9 258.2 480 224 480C100.3 480 0 379.7 0 256zm64 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm32-96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 192a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M128 160a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM301.1 277.3c1.9-6.8 2.9-13.9 2.9-21.3c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80l1.2 0L322 461.4 336.4 480l23.6 0 72 0 48 0 0-96-48 0-48.4 0L301.1 277.3zM192 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM80 272a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm32 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default StarshipFreighter;