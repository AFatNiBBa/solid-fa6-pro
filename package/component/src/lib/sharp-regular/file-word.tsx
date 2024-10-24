
import { Icon } from "../../index";

/**
 * A component that renders the `file-word` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-word?s=sharp-regular file-word}
 * @preview ![file-word](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-word.svg)
 */
const FileWord: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464L48 48l176 0 0 112 112 0 0 304L48 464zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM114.7 224l-49.5 0 47.5 189.8 4.5 18.2 18.7 0 8 0 18.4 0 4.8-17.7 24.8-92 24.8 92 4.8 17.7 18.4 0 8 0 18.7 0 4.5-18.2L318.7 224l-49.5 0-26 104L220 241.7 215.2 224l-18.4 0-9.6 0-18.4 0L164 241.7 140.7 328l-26-104z" />
    </Icon>
);

export default FileWord;