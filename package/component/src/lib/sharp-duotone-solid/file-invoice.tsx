
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-invoice` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-invoice?s=sharp-duotone-solid file-invoice}
 * @preview ![file-invoice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-invoice.svg)
 */
const FileInvoice: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l384 0 0-352-160 0L224 0 0 0zM64 64l16 0 64 0 16 0 0 32-16 0L80 96 64 96l0-32zm0 64l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32zm0 96l16 0 224 0 16 0 0 16 0 96 0 16-16 0L80 352l-16 0 0-16 0-96 0-16zM224 416l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32z" />
        <path d="M384 160L224 0l0 160 160 0zM80 224l-16 0 0 16 0 96 0 16 16 0 224 0 16 0 0-16 0-96 0-16-16 0L80 224zm16 96l0-64 192 0 0 64L96 320zm144 96l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0z" />
    </Icon>
);

export default FileInvoice;