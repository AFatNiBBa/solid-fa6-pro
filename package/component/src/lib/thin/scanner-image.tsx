
import { Icon } from "../../index";

/**
 * A component that renders the `scanner-image` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-image?s=thin scanner-image}
 * @preview ![scanner-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/scanner-image.svg)
 */
const ScannerImage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M43.7 32.9c-3.9-2-8.8-.5-10.8 3.4s-.5 8.8 3.4 10.8L503.9 288 64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-8 0-56 0-1c0-27-15.1-51.7-39-64L43.7 32.9zM560 352l0 56 0 8c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l448 0c26.5 0 48 21.5 48 48zM208 384a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM96 400a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default ScannerImage;