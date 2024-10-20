
import { Icon, generic } from "../../index";

/**
 * A component that renders the `barcode-scan` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode-scan?s=sharp-duotone-solid barcode-scan}
 * @preview ![barcode-scan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/barcode-scan.svg)
 */
const BarcodeScan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 232l24 0 592 0 24 0 0 48-24 0L24 280 0 280l0-48z" />
        <path d="M64 32l64 0 0 160-64 0L64 32zm0 288l64 0 0 160-64 0 0-160zm96 0l32 0 0 160-32 0 0-160zm64 0l64 0 0 160-64 0 0-160zm64-128l-64 0 0-160 64 0 0 160zm32 128l64 0 0 160-64 0 0-160zm64-128l-64 0 0-160 64 0 0 160zm64 128l32 0 0 160-32 0 0-160zm32-128l-32 0 0-160 32 0 0 160zm32 128l64 0 0 160-64 0 0-160zm64-128l-64 0 0-160 64 0 0 160zm-384 0l-32 0 0-160 32 0 0 160z" />
    </Icon>
);

export default BarcodeScan;