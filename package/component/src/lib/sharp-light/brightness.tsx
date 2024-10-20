
import { Icon } from "../../index";

/**
 * A component that renders the `brightness` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brightness?s=sharp-light brightness}
 * @preview ![brightness](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/brightness.svg)
 */
const Brightness: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 104l0 16 32 0 0-16 0-88 0-16L240 0l0 16 0 88zm16 88a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM240 512l32 0 0-16 0-80 0-16-32 0 0 16 0 80 0 16zM0 240l0 32 16 0 80 0 16 0 0-32-16 0-80 0L0 240zm408 0l-16 0 0 32 16 0 88 0 16 0 0-32-16 0-88 0zM63.7 425.7l22.6 22.6L97.6 437l56.6-56.6 11.3-11.3-22.6-22.6-11.3 11.3L75 414.4 63.7 425.7zM352.2 137.2l-11.3 11.3 22.6 22.6 11.3-11.3L437 97.6l11.3-11.3L425.7 63.7 414.4 75l-62.2 62.2zM86.3 63.7L63.7 86.3 75 97.6l56.6 56.6 11.3 11.3 22.6-22.6-11.3-11.3L97.6 75 86.3 63.7zM374.8 352.2l-11.3-11.3-22.6 22.6 11.3 11.3L414.4 437l11.3 11.3 22.6-22.6L437 414.4l-62.2-62.2z" />
    </Icon>
);

export default Brightness;