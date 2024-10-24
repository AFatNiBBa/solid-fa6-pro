
import { Icon } from "../../index";

/**
 * A component that renders the `cactus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cactus?s=sharp-light cactus}
 * @preview ![cactus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cactus.svg)
 */
const Cactus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 96c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 128 0 32 0 32 0 32 0 160 128 0 0-32 0-32 0-32 0-32 0-256zm32 288l0 32 112 0 16 0 0-16 0-128 0-16-32 0 0 16 0 80 0 32-32 0-64 0zm0 64l0 32 0 32-32 0-128 0-32 0 0-32 0-160L48 320l-16 0L0 320l0-32 0-16L0 144l0-16L0 96l32 0 32 0 32 0 0 32 0 16 0 48 0 32 32 0 32 0 0-128c0-53 43-96 96-96s96 43 96 96l0 256 32 0 32 0 0-32 0-48 0-16 0-32 32 0 32 0 32 0 0 32 0 16 0 128 0 16 0 32-32 0-16 0-112 0zM64 256l0-32 0-80 0-16-32 0 0 16 0 128 0 16 16 0 112 0 0-32-64 0-32 0zM224 144a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 208a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Cactus;