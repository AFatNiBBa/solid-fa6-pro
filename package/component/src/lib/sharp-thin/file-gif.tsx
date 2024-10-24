
import { Icon } from "../../index";

/**
 * A component that renders the `file-gif` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-gif?s=sharp-thin file-gif}
 * @preview ![file-gif](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-gif.svg)
 */
const FileGif: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 496l160 0 0 16L16 512 0 512l0-16L0 16 0 0 16 0 224 0 384 160l0 144-16 0 0-128-152 0-8 0 0-8 0-152L16 16l0 480zM361.4 160L224 22.6 224 160l137.4 0zM232 400c0-17.7 14.3-32 32-32l16 0c17.7 0 32 14.3 32 32l0 16-16 0 0-16c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16-8 0-8 0 0-16 8 0 16 0 8 0 0 8 0 24c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-80zm144-24l0 128 0 8-16 0 0-8 0-128 0-8 16 0 0 8zm56-8l48 0 8 0 0 16-8 0-40 0 0 48 40 0 8 0 0 16-8 0-40 0 0 56 0 8-16 0 0-8 0-64 0-64 0-8 8 0z" />
    </Icon>
);

export default FileGif;