
import { Icon } from "../../index";

/**
 * A component that renders the `cactus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cactus?s=sharp-thin cactus}
 * @preview ![cactus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cactus.svg)
 */
const Cactus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 496l0-48 0-16 0-64 0-16 0-256c0-44.2-35.8-80-80-80s-80 35.8-80 80l0 128 0 16 0 64 0 16 0 176 160 0zm16-128l0 64 112 0 32 0 0-32 0-128 0-32-64 0 0 32 0 80 0 16-16 0-64 0zm0 80l0 48 0 16-16 0-160 0-16 0 0-16 0-176L48 320l-32 0L0 320l0-16 0-32L0 144l0-32L0 96l16 0 64 0 16 0 0 16 0 32 0 64 0 16 16 0 48 0 0-128c0-53 43-96 96-96s96 43 96 96l0 256 48 0 16 0 0-16 0-64 0-32 0-16 16 0 64 0 16 0 0 16 0 32 0 128 0 32 0 16-16 0-32 0-112 0zM160 240l-64 0-16 0 0-16 0-80 0-32-64 0 0 32 0 128 0 32 32 0 112 0 0-64zm64-96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 208a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Cactus;