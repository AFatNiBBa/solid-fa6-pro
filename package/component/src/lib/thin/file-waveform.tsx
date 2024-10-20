
import { Icon } from "../../index";

/**
 * A component that renders the `file-waveform` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-waveform?s=thin file-waveform}
 * @preview ![file-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/file-waveform.svg)
 */
const FileWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 496L80 496l0-160-16 0 0 160 0 16 16 0 352 0 16 0 0-16 0-336L288 0 80 0 64 0l0 16 0 240 16 0L80 16l192 0 0 152 0 8 8 0 152 0 0 320zm-6.6-336L288 160l0-137.4L425.4 160zM263.2 228.4c-1.4-2.8-4.2-4.5-7.3-4.4s-5.9 1.9-7.1 4.7L190.9 358.7l-40.1-66.8c-1.4-2.4-4-3.9-6.9-3.9L8 288c-4.4 0-8 3.6-8 8s3.6 8 8 8l131.5 0 45.7 76.1c1.5 2.6 4.4 4.1 7.3 3.9s5.6-2 6.8-4.7l57.1-128.5 24.4 48.8c1.4 2.7 4.1 4.4 7.2 4.4l64 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-59.1 0-29.8-59.6z" />
    </Icon>
);

export default FileWaveform;