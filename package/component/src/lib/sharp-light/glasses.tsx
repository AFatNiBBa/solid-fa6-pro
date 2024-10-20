
import { Icon } from "../../index";

/**
 * A component that renders the `glasses` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glasses?s=sharp-light glasses}
 * @preview ![glasses](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/glasses.svg)
 */
const Glasses: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M68.2 32.6l14 2.5 72.7 13.2 15.7 2.9-5.7 31.5-15.7-2.9L90.4 69.1 32.7 256 224 256l32 0 0 32 64 0 0-32 32 0 191.3 0L485.6 69.1 426.9 79.7l-15.7 2.9-5.7-31.5 15.7-2.9 72.7-13.2 14-2.5L512 46.1l63.3 205.2 .7 2.3 0 2.4s0 0 0 0l0 32 0 48 0 16 0 96 0 32-32 0-192 0-32 0 0-32 0-128-64 0 0 128 0 32-32 0L32 480 0 480l0-32 0-96 0-16 0-48 0-32s0 0 0 0l0-2.4 .7-2.3L64 46.1l4.2-13.6zM544 352l0-16 0-48-192 0 0 160 192 0 0-96zM32 336l0 16 0 96 192 0 0-160L32 288l0 48z" />
    </Icon>
);

export default Glasses;