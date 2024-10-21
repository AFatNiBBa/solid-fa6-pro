
import { Icon } from "../../index";

/**
 * A component that renders the `scanner-image` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-image?s=light scanner-image}
 * @preview ![scanner-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/scanner-image.svg)
 */
const ScannerImage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M55.2 33.7c-7.9-4-17.5-.7-21.5 7.2s-.7 17.5 7.2 21.5L492.2 288 64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-24 0-40 0-8.4c0-30.3-17.1-58-44.2-71.6L55.2 33.7zM544 352l0 40 0 24c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l448 0c17.7 0 32 14.3 32 32zM104 408a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm104-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default ScannerImage;