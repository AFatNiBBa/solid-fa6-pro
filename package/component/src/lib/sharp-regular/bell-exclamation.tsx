
import { Icon } from "../../index";

/**
 * A component that renders the `bell-exclamation` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-exclamation?s=sharp-regular bell-exclamation}
 * @preview ![bell-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bell-exclamation.svg)
 */
const BellExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M256 0L192 0l0 51.2C119 66 64 130.6 64 208l0 88L0 368l0 48 48 0 352 0 48 0 0-48-64-72 0-88c0-77.4-55-142-128-156.8L256 0zm80 314.2l12.1 13.6L383.8 368 64.2 368l35.7-40.1L112 314.2l0-18.2 0-88c0-61.9 50.1-112 112-112s112 50.1 112 112l0 88 0 18.2zM288 448l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3zM248 128l-48 0 0 24 0 80 0 24 48 0 0-24 0-80 0-24zm0 168l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default BellExclamation;