
import { Icon } from "../../index";

/**
 * A component that renders the `paste` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paste?s=sharp-light paste}
 * @preview ![paste](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/paste.svg)
 */
const Paste: typeof Icon = x => (
    <Icon {...x}>
        <path d="M136.5 51.2C138.7 40.2 148.4 32 160 32s21.3 8.2 23.5 19.2L186.1 64l5.9 0 7.2 0L224 64l8 0 24 0 32 0 0 32 32 0 0-32 0-32-32 0-32 0-16 0-29.4 0c-9-18.9-28.3-32-50.6-32s-41.6 13.1-50.6 32L80 32 64 32 32 32 0 32 0 64 0 416l0 32 32 0 160 0 0-32L32 416 32 64l32 0 0 48 0 16 16 0 112 0 0-32L96 96l0-32 24.8 0 13.1 0 2.6-12.8zM480 480l-224 0 0-320 138.7 0L480 245.3 480 480zm32-248L408 128l-152 0-32 0 0 32 0 320 0 32 32 0 224 0 32 0 0-32 0-248z" />
    </Icon>
);

export default Paste;