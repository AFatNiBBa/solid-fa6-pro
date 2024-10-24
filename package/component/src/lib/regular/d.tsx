
import { Icon } from "../../index";

/**
 * A component that renders the `d` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/d?s=regular d}
 * @preview ![d](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/d.svg)
 */
const D: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M56 80c-4.4 0-8 3.6-8 8l0 336c0 4.4 3.6 8 8 8l104 0c97.2 0 176-78.8 176-176s-78.8-176-176-176L56 80zM0 88C0 57.1 25.1 32 56 32l104 0c123.7 0 224 100.3 224 224s-100.3 224-224 224L56 480c-30.9 0-56-25.1-56-56L0 88z" />
    </Icon>
);

export default D;