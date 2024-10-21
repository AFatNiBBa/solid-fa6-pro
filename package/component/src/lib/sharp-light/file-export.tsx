
import { Icon } from "../../index";

/**
 * A component that renders the `file-export` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-export?s=sharp-light file-export}
 * @preview ![file-export](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-export.svg)
 */
const FileExport: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 192l0 64 32 0 0-104L232 0 32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-112-32 0 0 112L32 480 32 32l160 0 0 144 0 16 16 0 144 0zm-5.3-32L224 160l0-122.7L346.7 160zm120.6 52.7L456 201.4 433.4 224l11.3 11.3L513.4 304 208 304l-16 0 0 32 16 0 305.4 0-68.7 68.7L433.4 416 456 438.6l11.3-11.3 96-96L574.6 320l-11.3-11.3-96-96z" />
    </Icon>
);

export default FileExport;