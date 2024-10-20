
import { Icon } from "../../index";

/**
 * A component that renders the `file-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-exclamation?s=sharp-solid file-exclamation}
 * @preview ![file-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-exclamation.svg)
 */
const FileExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM216 192l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM168 384l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default FileExclamation;