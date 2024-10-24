
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fish-bones` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish-bones?s=sharp-duotone-solid fish-bones}
 * @preview ![fish-bones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fish-bones.svg)
 */
const FishBones: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L64 256 0 384l32 32 64-64 0-48 0-24 0-48 0-24 0-48L32 96 0 128zm416-16l0 120 64 0 0 48-64 0 0 120 32 0L576 256 448 112l-32 0z" />
        <path d="M184 160l0-24-48 0 0 24 0 72-40 0 0 48 40 0 0 72 0 24 48 0 0-24 0-72 48 0 0 72 0 24 48 0 0-24 0-72 48 0 0 72 0 24 48 0 0-24 0-72 104 0 0-48-104 0 0-72 0-24-48 0 0 24 0 72-48 0 0-72 0-24-48 0 0 24 0 72-48 0 0-72z" />
    </Icon>
);

export default FishBones;