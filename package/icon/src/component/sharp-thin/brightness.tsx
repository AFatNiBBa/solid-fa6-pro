
import { Icon } from "../../index";

/**
 * A component that renders the `brightness` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brightness?s=sharp-thin brightness}
 * @preview ![brightness](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/brightness.svg)
 */
const Brightness: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 104l0 8 16 0 0-8 0-96 0-8L248 0l0 8 0 96zm8 72a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm-8 160l16 0 0-8 0-96 0-8-16 0 0 8 0 96 0 8zM0 248l0 16 8 0 96 0 8 0 0-16-8 0L8 248l-8 0zm408 0l-8 0 0 16 8 0 96 0 8 0 0-16-8 0-96 0zM69.3 431.4l11.3 11.3 5.7-5.7 67.9-67.9 5.7-5.7-11.3-11.3-5.7 5.7L75 425.7l-5.7 5.7zM357.8 142.9l-5.7 5.7 11.3 11.3 5.7-5.7L437 86.3l5.7-5.7L431.4 69.3 425.7 75l-67.9 67.9zM80.6 69.3L69.3 80.6 75 86.3l67.9 67.9 5.7 5.7 11.3-11.3-5.7-5.7L86.3 75l-5.7-5.7zM369.1 357.8l-5.7-5.7-11.3 11.3 5.7 5.7L425.7 437l5.7 5.7 11.3-11.3-5.7-5.7-67.9-67.9z" />
    </Icon>
);

export default Brightness;