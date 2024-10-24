
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-word` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-word?s=sharp-duotone-solid file-word}
 * @preview ![file-word](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-word.svg)
 */
const FileWord: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM57.7 240L113 430.7l5 17.3 18 0 8 0 18.4 0 4.8-17.7 24.8-92 24.8 92 4.8 17.7 18.4 0 8 0 18 0 5-17.3L326.3 240l-50 0L244.7 349.3 220 257.7 215.2 240l-18.4 0-9.6 0-18.4 0L164 257.7l-24.7 91.5L107.6 240l-50 0z" />
        <path d="M384 160L224 0l0 160 160 0zM107.6 240l-50 0L113 430.7l5 17.3 18 0 8 0 18.4 0 4.8-17.7 24.8-92 24.8 92 4.8 17.7 18.4 0 8 0 18 0 5-17.3L326.3 240l-50 0L244.7 349.3 220 257.7 215.2 240l-18.4 0-9.6 0-18.4 0L164 257.7l-24.7 91.5L107.6 240z" />
    </Icon>
);

export default FileWord;