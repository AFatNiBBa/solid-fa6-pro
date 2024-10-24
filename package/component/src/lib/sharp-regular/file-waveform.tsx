
import { Icon } from "../../index";

/**
 * A component that renders the `file-waveform` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-waveform?s=sharp-regular file-waveform}
 * @preview ![file-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-waveform.svg)
 */
const FileWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 464l-288 0 0-112-48 0 0 112 0 48 48 0 288 0 48 0 0-48 0-336L320 0 112 0 64 0l0 48 0 192 48 0 0-192 176 0 0 112 112 0 0 304zM276.8 228.1l-22.2-38.9-20.1 40.1-45.5 91L164 282.7 156.8 272 144 272 24 272 0 272l0 48 24 0 107.2 0L172 381.3 195 415.7l18.5-37 43.9-87.9 9.8 17.1 6.9 12.1 13.9 0 40 0 24 0 0-48-24 0-26.1 0-25.1-43.9z" />
    </Icon>
);

export default FileWaveform;