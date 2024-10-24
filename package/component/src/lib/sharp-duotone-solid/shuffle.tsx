
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shuffle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuffle?s=sharp-duotone-solid shuffle}
 * @preview ![shuffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shuffle.svg)
 */
const Shuffle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352l0 64 32 0 96 0 16 0 9.6-12.8L224 309.3c-13.3-17.8-26.7-35.6-40-53.3l-72 96-80 0L0 352zM224 202.7L264 256l72-96 48 0 0 64 32 0 96-96L416 32l-32 0 0 64-64 0-16 0-9.6 12.8L224 202.7z" />
        <path d="M320 416l-16 0-9.6-12.8L112 160l-80 0L0 160 0 96l32 0 96 0 16 0 9.6 12.8L336 352l48 0 0-64 32 0 96 96-96 96-32 0 0-64-64 0z" />
    </Icon>
);

export default Shuffle;