
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug-hot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-hot?s=sharp-duotone-solid mug-hot}
 * @preview ![mug-hot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mug-hot.svg)
 */
const MugHot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0l0 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136l0 24 48 0 0-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24l0-24L64 0zM176 0l0 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136l0 24 48 0 0-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24l0-24L176 0z" />
        <path d="M352 192L0 192 0 512l384 0 0-96 16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-16 0-32 0zm32 64l16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0-96z" />
    </Icon>
);

export default MugHot;