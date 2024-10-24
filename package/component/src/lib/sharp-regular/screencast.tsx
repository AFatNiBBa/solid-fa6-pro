
import { Icon } from "../../index";

/**
 * A component that renders the `screencast` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screencast?s=sharp-regular screencast}
 * @preview ![screencast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/screencast.svg)
 */
const Screencast: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 80L48 80l0 116c-15.6-2.6-31.6-4-48-4L0 80 0 32l48 0 480 0 48 0 0 48 0 352 0 48-48 0-240 0c0-16.4-1.4-32.4-4-48l244 0 0-352zM0 272l0-48c141.4 0 256 114.6 256 256l-48 0c0-114.9-93.1-208-208-208zM32 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm80 64c0-61.9-50.1-112-112-112l0-48c88.4 0 160 71.6 160 160l-48 0z" />
    </Icon>
);

export default Screencast;