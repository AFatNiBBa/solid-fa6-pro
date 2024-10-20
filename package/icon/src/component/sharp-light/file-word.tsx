
import { Icon } from "../../index";

/**
 * A component that renders the `file-word` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-word?s=sharp-light file-word}
 * @preview ![file-word](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-word.svg)
 */
const FileWord: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 480L32 480 32 32l160 0 0 144 0 16 16 0 144 0 0 288zM224 37.3L346.7 160 224 160l0-122.7zM232 0L32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-328L232 0zm77.9 224l-33.2 0L240.1 355.7 207.4 235.8 204.2 224l-24.4 0-3.2 11.8L143.9 355.7 107.3 224l-33.2 0 54.5 196.3 3.3 11.7 24.4 0 3.2-11.8L192 300.8l32.6 119.4 3.2 11.8 24.4 0 3.3-11.7L309.9 224z" />
    </Icon>
);

export default FileWord;