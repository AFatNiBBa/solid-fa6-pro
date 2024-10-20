
import { Icon } from "../../index";

/**
 * A component that renders the `file-waveform` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-waveform?s=light file-waveform}
 * @preview ![file-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-waveform.svg)
 */
const FileWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 448c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-64-32 0 0 64c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-284.1c0-12.7-5.1-24.9-14.1-33.9L318.1 14.1c-9-9-21.2-14.1-33.9-14.1L128 0C92.7 0 64 28.7 64 64l0 224 32 0L96 64c0-17.7 14.3-32 32-32l128 0 0 112c0 26.5 21.5 48 48 48l112 0 0 256zm-.5-288L304 160c-8.8 0-16-7.2-16-16l0-111.5c2.8 .7 5.4 2.1 7.4 4.2L411.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4zM270.3 264.8c-2.7-5.4-8.3-8.8-14.3-8.8s-11.6 3.4-14.3 8.8L189.3 369.7l-32.5-43.3c-3-4-7.8-6.4-12.8-6.4L16 320c-8.8 0-16 7.2-16 16s7.2 16 16 16l120 0 43.2 57.6c3.3 4.4 8.7 6.8 14.2 6.3s10.4-3.8 12.9-8.8L256 307.8l17.7 35.4c2.7 5.4 8.3 8.8 14.3 8.8l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-54.1 0-27.6-55.2z" />
    </Icon>
);

export default FileWaveform;