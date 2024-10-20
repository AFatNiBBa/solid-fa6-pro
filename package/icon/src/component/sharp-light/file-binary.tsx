
import { Icon } from "../../index";

/**
 * A component that renders the `file-binary` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-binary?s=sharp-light file-binary}
 * @preview ![file-binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-binary.svg)
 */
const FileBinary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 480L32 480 32 32l160 0 0 144 0 16 16 0 144 0 0 288zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zM80 256l-16 0 0 16 0 128 0 16 16 0 96 0 16 0 0-16 0-128 0-16-16 0-96 0zM96 384l0-96 64 0 0 96-64 0zM240 256l-16 0 0 32 16 0 16 0 0 96-16 0-16 0 0 32 16 0 32 0 32 0 16 0 0-32-16 0-16 0 0-112 0-16-16 0-32 0z" />
    </Icon>
);

export default FileBinary;