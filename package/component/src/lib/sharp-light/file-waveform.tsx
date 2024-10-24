
import { Icon } from "../../index";

/**
 * A component that renders the `file-waveform` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-waveform?s=sharp-light file-waveform}
 * @preview ![file-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-waveform.svg)
 */
const FileWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 192l0 288L96 480l0-96-32 0 0 96 0 32 32 0 320 0 32 0 0-32 0-328L296 0 96 0 64 0l0 32 0 256 32 0L96 32l160 0 0 144 0 16 16 0 144 0zm-5.3-32L288 160l0-122.7L410.7 160zM270.3 264.8L256 236.2l-14.3 28.6L189.3 369.7l-32.5-43.3L152 320l-8 0L16 320 0 320l0 32 16 0 120 0 43.2 57.6 15.5 20.7 11.6-23.2L256 307.8l17.7 35.4 4.4 8.8 9.9 0 64 0 16 0 0-32-16 0-54.1 0-27.6-55.2z" />
    </Icon>
);

export default FileWaveform;