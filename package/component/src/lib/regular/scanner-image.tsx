
import { Icon } from "../../index";

/**
 * A component that renders the `scanner-image` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-image?s=regular scanner-image}
 * @preview ![scanner-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/scanner-image.svg)
 */
const ScannerImage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M66.7 34.5c-11.9-5.9-26.3-1.1-32.2 10.7s-1.1 26.3 10.7 32.2L466.3 288 64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-32 0-32 0-8.4c0-33.3-18.8-63.8-48.6-78.7L66.7 34.5zM528 352l0 32 0 32c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16l448 0c8.8 0 16 7.2 16 16zM120 384a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default ScannerImage;