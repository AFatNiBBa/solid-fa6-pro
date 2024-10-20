
import { Icon } from "../../index";

/**
 * A component that renders the `file-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-xmark?s=sharp-solid file-xmark}
 * @preview ![file-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-xmark.svg)
 */
const FileXmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zm33.9 256l-17 17-47 47 47 47 17 17L256 417.9l-17-17-47-47-47 47-17 17L94.1 384l17-17 47-47-47-47-17-17L128 222.1l17 17 47 47 47-47 17-17L289.9 256z" />
    </Icon>
);

export default FileXmark;