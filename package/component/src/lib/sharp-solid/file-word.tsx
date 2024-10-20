
import { Icon } from "../../index";

/**
 * A component that renders the `file-word` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-word?s=sharp-solid file-word}
 * @preview ![file-word](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/file-word.svg)
 */
const FileWord: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0L0 0 0 512l384 0 0-352-160 0L224 0zm32 0l0 128 128 0L256 0zM107.6 240l31.7 109.3L164 257.7l4.8-17.7 18.4 0 9.6 0 18.4 0 4.8 17.7 24.7 91.5L276.4 240l50 0L271.1 430.7 266 448l-18 0-8 0-18.4 0-4.8-17.7-24.8-92-24.8 92L162.4 448 144 448l-8 0-18 0-5-17.3L57.7 240l50 0z" />
    </Icon>
);

export default FileWord;