
import { Icon } from "../../index";

/**
 * A component that renders the `file-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-check?s=sharp-light file-check}
 * @preview ![file-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-check.svg)
 */
const FileCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 480L32 32l160 0 0 144 0 16 16 0 144 0 0 288L32 480zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zm51.3 294l11.3-11.3L272 260l-11.3 11.3-95.4 95.4-42-42L112 313.4 89.4 336l11.3 11.3L154 400.6 165.3 412l11.3-11.3L283.3 294z" />
    </Icon>
);

export default FileCheck;