
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cactus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cactus?s=sharp-duotone-solid cactus}
 * @preview ![cactus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cactus.svg)
 */
const Cactus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l0 48L0 272l0 48 48 0 64 0 48 0 0-96-48 0-16 0 0-80 0-48L0 96zM352 352l0 96 48 0 64 0 48 0 0-48 0-128 0-48-96 0 0 48 0 80-16 0-48 0z" />
        <path d="M160 96c0-53 43-96 96-96s96 43 96 96l0 416-192 0 0-416zm80 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 240a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Cactus;