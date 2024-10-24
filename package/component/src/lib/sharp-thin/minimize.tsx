
import { Icon } from "../../index";

/**
 * A component that renders the `minimize` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minimize?s=sharp-thin minimize}
 * @preview ![minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/minimize.svg)
 */
const Minimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M21.7 10.3L16 4.7 4.7 16l5.7 5.7 112 112s0 0 0 0l-63 63L48 208l11.3 11.3L64 224l144 0 16 0 0-16 0-144-4.7-4.7L208 48 196.7 59.3l-63 63s0 0 0 0l-112-112zm480 11.3l5.7-5.7L496 4.7l-5.7 5.7-112 112s0 0 0 0l-63-63L304 48 292.7 59.3 288 64l0 144 0 16 16 0 144 0 4.7-4.7L464 208l-11.3-11.3-63-63s0 0 0 0l112-112zm-368 368l63 63L208 464l11.3-11.3L224 448l0-144 0-16-16 0L64 288l-4.7 4.7L48 304l11.3 11.3 63 63-112 112L4.7 496 16 507.3l5.7-5.7 112-112zm244.7 0l112 112 5.7 5.7L507.3 496l-5.7-5.7-112-112 63-63L464 304l-11.3-11.3L448 288l-144 0-16 0 0 16 0 144 4.7 4.7L304 464l11.3-11.3 63-63zM208 70.6L208 208 70.6 208 208 70.6zm0 370.7L70.6 304 208 304l0 137.4zM441.4 304L304 441.4 304 304l137.4 0zM304 70.6L441.4 208 304 208l0-137.4z" />
    </Icon>
);

export default Minimize;