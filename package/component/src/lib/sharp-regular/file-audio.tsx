
import { Icon } from "../../index";

/**
 * A component that renders the `file-audio` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-audio?s=sharp-regular file-audio}
 * @preview ![file-audio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-audio.svg)
 */
const FileAudio: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l176 0 0 112 112 0 0 304L48 464 48 48zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM226.5 393.7L258.3 430c23.4-24.4 37.7-57.5 37.7-94s-14.4-69.6-37.7-94l-31.8 36.3C239.9 293.8 248 313.9 248 336s-8.1 42.2-21.5 57.7zM96 376l40 0 40 40 16 0 0-160-16 0-40 40-40 0 0 80z" />
    </Icon>
);

export default FileAudio;