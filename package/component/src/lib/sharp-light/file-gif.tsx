
import { Icon } from "../../index";

/**
 * A component that renders the `file-gif` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-gif?s=sharp-light file-gif}
 * @preview ![file-gif](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-gif.svg)
 */
const FileGif: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 192l0 112 32 0 0-152L232 0 32 0 0 0 0 32 0 480l0 32 32 0 144 0 0-32L32 480 32 32l160 0 0 144 0 16 16 0 144 0zm-5.3-32L224 160l0-122.7L346.7 160zM224 392l0 80c0 22.1 17.9 40 40 40l16 0c22.1 0 40-17.9 40-40l0-24 0-16-16 0-16 0-16 0 0 32 16 0 0 8c0 4.4-3.6 8-8 8l-16 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8l16 0c4.4 0 8 3.6 8 8l0 16 32 0 0-16c0-22.1-17.9-40-40-40l-16 0c-22.1 0-40 17.9-40 40zm160-24l0-16-32 0 0 16 0 128 0 16 32 0 0-16 0-128zm48-16l-16 0 0 16 0 64 0 64 0 16 32 0 0-16 0-48 32 0 16 0 0-32-16 0-32 0 0-32 32 0 16 0 0-32-16 0-48 0z" />
    </Icon>
);

export default FileGif;