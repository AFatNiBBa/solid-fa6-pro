
import { Icon, generic } from "../../index";

/**
 * A component that renders the `block-brick` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-brick?s=duotone block-brick}
 * @preview ![block-brick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/block-brick.svg)
 */
const BlockBrick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 16 64 0 0-80C28.7 32 0 60.7 0 96zm0 48l0 96 208 0 0-96L0 144zM0 272l0 96 64 0 0-96L0 272zM0 400l0 16c0 35.3 28.7 64 64 64l144 0 0-80L0 400zM96 32l0 80 256 0 0-80L96 32zm0 240l0 96 256 0 0-96L96 272zM240 144l0 96 208 0 0-96-208 0zm0 256l0 80 144 0c35.3 0 64-28.7 64-64l0-16-208 0zM384 32l0 80 64 0 0-16c0-35.3-28.7-64-64-64zm0 240l0 96 64 0 0-96-64 0z" />
        <path d="M64 112L0 112l0 32 208 0 0 96L0 240l0 32 64 0 0 96L0 368l0 32 208 0 0 80 32 0 0-80 208 0 0-32-64 0 0-96 64 0 0-32-208 0 0-96 208 0 0-32-64 0 0-80-32 0 0 80L96 112l0-80L64 32l0 80zM352 368L96 368l0-96 256 0 0 96z" />
    </Icon>
);

export default BlockBrick;