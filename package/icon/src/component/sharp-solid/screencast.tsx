
import { Icon } from "../../index";

/**
 * A component that renders the `screencast` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screencast?s=sharp-solid screencast}
 * @preview ![screencast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/screencast.svg)
 */
const Screencast: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 96L64 96l0 103.1C43.4 194.5 22 192 0 192L0 96 0 32l64 0 448 0 64 0 0 64 0 320 0 64-64 0-224 0c0-22-2.5-43.4-7.1-64L512 416l0-320zM0 272l0-48c141.4 0 256 114.6 256 256l-48 0c0-114.9-93.1-208-208-208zM32 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm80 64c0-61.9-50.1-112-112-112l0-48c88.4 0 160 71.6 160 160l-48 0z" />
    </Icon>
);

export default Screencast;