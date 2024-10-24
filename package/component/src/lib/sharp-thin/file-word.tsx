
import { Icon } from "../../index";

/**
 * A component that renders the `file-word` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-word?s=sharp-thin file-word}
 * @preview ![file-word](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-word.svg)
 */
const FileWord: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 496L16 16l192 0 0 152 0 8 8 0 152 0 0 320L16 496zM224 22.6L361.4 160 224 160l0-137.4zM224 0L16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-336L224 0zm90.7 240L298 240 248 411.4 199.7 245.8 198 240l-12 0-1.7 5.8L136 411.4 86 240l-16.7 0 59 202.2L130 448l12 0 1.7-5.8L192 276.6l48.3 165.7L242 448l12 0 1.7-5.8 59-202.2z" />
    </Icon>
);

export default FileWord;