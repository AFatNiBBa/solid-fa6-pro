
import { Icon, generic } from "../../index";

/**
 * A component that renders the `amp-guitar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/amp-guitar?s=sharp-duotone-solid amp-guitar}
 * @preview ![amp-guitar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/amp-guitar.svg)
 */
const AmpGuitar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M92.5 96l66.5 0c2.1-1.9 4.3-3.8 6.5-5.8C192.5 67.2 224.9 48 256 48s63.5 19.2 90.4 42.2c2.2 1.9 4.4 3.9 6.5 5.8l66.5 0c-1.7-2.1-3.7-4.4-6-6.9c-8.5-9.6-20.8-22.4-35.8-35.3C348.5 28.8 304.9 0 256 0s-92.5 28.8-121.6 53.8c-15 12.9-27.3 25.7-35.8 35.3c-2.3 2.6-4.3 4.9-6 6.9zM112 288l0 32 32 0 0-32-32 0zm0 96l0 32 32 0 0-32-32 0zm32-48l0 32 32 0 0-32-32 0zm32-48l0 32 32 0 0-32-32 0zm0 96l0 32 32 0 0-32-32 0zm32-48l0 32 32 0 0-32-32 0zm32-48l0 32 32 0 0-32-32 0zm0 96l0 32 32 0 0-32-32 0zm32-48l0 32 32 0 0-32-32 0zm32-48l0 32 32 0 0-32-32 0zm0 96l0 32 32 0 0-32-32 0zm32-48l0 32 32 0 0-32-32 0zm32-48l0 32 32 0 0-32-32 0zm0 96l0 32 32 0 0-32-32 0z" />
        <path d="M512 96L0 96 0 512l512 0 0-416zM96 152a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm152-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm56 80l0 192L64 448l0-192 384 0z" />
    </Icon>
);

export default AmpGuitar;