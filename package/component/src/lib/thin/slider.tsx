
import { Icon } from "../../index";

/**
 * A component that renders the `slider` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slider?s=thin slider}
 * @preview ![slider](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/slider.svg)
 */
const Slider: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 112c26.5 0 48 21.5 48 48l0 192c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-192c0-26.5 21.5-48 48-48l32 0zM320 96c-35.3 0-64 28.7-64 64l0 192c0 35.3 28.7 64 64 64l32 0c35.3 0 64-28.7 64-64l0-88 88 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-88 0 0-88c0-35.3-28.7-64-64-64l-32 0zM0 256c0 4.4 3.6 8 8 8l216 0 0-16L8 248c-4.4 0-8 3.6-8 8z" />
    </Icon>
);

export default Slider;