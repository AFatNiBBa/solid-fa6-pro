
import { Icon } from "../../index";

/**
 * A component that renders the `barcode-read` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode-read?s=sharp-thin barcode-read}
 * @preview ![barcode-read](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/barcode-read.svg)
 */
const BarcodeRead: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 0L8 0 152 0l8 0 0 16-8 0L16 16l0 136 0 8L0 160l0-8L0 8 0 0zM144 128l0 256-16 0 0-256 16 0zm48 0l0 256-16 0 0-256 16 0zm48 0l16 0 0 256-16 0 0-256zm96 0l0 256-16 0 0-256 16 0zm32 0l16 0 0 256-16 0 0-256zm80 0l0 256-16 0 0-256 16 0zM568 0l8 0 0 8 0 144 0 8-16 0 0-8 0-136L424 16l-8 0 0-16 8 0L568 0zM0 512l0-8L0 360l0-8 16 0 0 8 0 136 136 0 8 0 0 16-8 0L8 512l-8 0zm568 0l-144 0-8 0 0-16 8 0 136 0 0-136 0-8 16 0 0 8 0 144 0 8-8 0z" />
    </Icon>
);

export default BarcodeRead;