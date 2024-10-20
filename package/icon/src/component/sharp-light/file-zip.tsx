
import { Icon } from "../../index";

/**
 * A component that renders the `file-zip` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-zip?s=sharp-light file-zip}
 * @preview ![file-zip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-zip.svg)
 */
const FileZip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 192l0 112 32 0 0-152L232 0 32 0 0 0 0 32 0 480l0 32 32 0 144 0 0-32L32 480 32 32l160 0 0 144 0 16 16 0 144 0zm-5.3-32L224 160l0-122.7L346.7 160zM304 352l-64 0-16 0 0 32 16 0 41 0-54.9 96.1-2.1 3.7 0 4.2 0 8 0 16 16 0 64 0 16 0 0-32-16 0-41 0 54.9-96.1 2.1-3.7 0-4.2 0-8 0-16-16 0zm80 16l0-16-32 0 0 16 0 128 0 16 32 0 0-16 0-128zm32-16l0 16 0 80 0 48 0 16 32 0 0-16 0-32 8 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-24 0-16 0zm32 80l0-48 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0z" />
    </Icon>
);

export default FileZip;