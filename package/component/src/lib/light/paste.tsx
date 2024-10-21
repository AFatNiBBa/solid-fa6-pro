
import { Icon } from "../../index";

/**
 * A component that renders the `paste` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paste?s=light paste}
 * @preview ![paste](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/paste.svg)
 */
const Paste: typeof Icon = x => (
    <Icon {...x}>
        <path d="M136.5 51.2C138.7 40.2 148.4 32 160 32s21.3 8.2 23.5 19.2C185 58.6 191.6 64 199.2 64l8.8 0c8.8 0 16 7.2 16 16l0 16L96 96l0-16c0-8.8 7.2-16 16-16l8.8 0c7.6 0 14.2-5.4 15.7-12.8zM160 0c-22.3 0-41.6 13.1-50.6 32L64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64l128 0 0-32L64 416c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l2.7 0C65 69 64 74.4 64 80l0 16c0 17.7 14.3 32 32 32l112 0c11.5-15.4 28.5-26.4 48-30.4c0-.5 0-1.1 0-1.6l0-16c0-5.6-1-11-2.7-16l2.7 0c17.7 0 32 14.3 32 32l32 0c0-35.3-28.7-64-64-64l-45.4 0c-9-18.9-28.3-32-50.6-32zM448 480l-160 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l108.1 0c4.2 0 8.3 1.7 11.3 4.7l67.9 67.9c3 3 4.7 7.1 4.7 11.3L480 448c0 17.7-14.3 32-32 32zm49.9-270.1l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L288 128c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9z" />
    </Icon>
);

export default Paste;