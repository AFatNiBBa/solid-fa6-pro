
import { Icon } from "../../index";

/**
 * A component that renders the `slider` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slider?s=solid slider}
 * @preview ![slider](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/slider.svg)
 */
const Slider: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 160l0 192-32 0 0-192 32 0zM320 96c-35.3 0-64 28.7-64 64l0 192c0 35.3 28.7 64 64 64l32 0c35.3 0 64-28.7 64-64l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64c0-35.3-28.7-64-64-64l-32 0zM0 256c0 17.7 14.3 32 32 32l192 0 0-64L32 224c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default Slider;