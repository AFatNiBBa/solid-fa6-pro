
import { Icon } from "../../index";

/**
 * A component that renders the `sun-bright` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-bright?s=sharp-thin sun-bright}
 * @preview ![sun-bright](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sun-bright.svg)
 */
const SunBright: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 0l0 8 0 96 0 8-16 0 0-8 0-96 0-8 16 0zM0 248l8 0 96 0 8 0 0 16-8 0L8 264l-8 0 0-16zm400 0l8 0 96 0 8 0 0 16-8 0-96 0-8 0 0-16zM264 400l0 8 0 96 0 8-16 0 0-8 0-96 0-8 16 0zM80.6 69.3L86.3 75l67.9 67.9 5.7 5.7-11.3 11.3-5.7-5.7L75 86.3l-5.7-5.7L80.6 69.3zm-11.3 362l5.7-5.7 67.9-67.9 5.7-5.7 11.3 11.3-5.7 5.7L86.3 437l-5.7 5.7L69.3 431.4zM352.2 148.5l5.7-5.7L425.7 75l5.7-5.7 11.3 11.3L437 86.3l-67.9 67.9-5.7 5.7-11.3-11.3zm11.3 203.6l5.7 5.7L437 425.7l5.7 5.7-11.3 11.3-5.7-5.7-67.9-67.9-5.7-5.7 11.3-11.3zM360 256a104 104 0 1 0 -208 0 104 104 0 1 0 208 0zm-224 0a120 120 0 1 1 240 0 120 120 0 1 1 -240 0z" />
    </Icon>
);

export default SunBright;