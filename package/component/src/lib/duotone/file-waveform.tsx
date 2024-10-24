
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-waveform` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-waveform?s=duotone file-waveform}
 * @preview ![file-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-waveform.svg)
 */
const FileWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 64C64 28.7 92.7 0 128 0L288 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-128 65.2 0 41.4 82.7c4.2 8.5 13 13.6 22.5 13.2s17.8-6.3 21.3-15.1l44.2-110.4 8.1 16.2c4.1 8.1 12.4 13.3 21.5 13.3l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-41.2 0-25.4-50.7c-4.2-8.5-13-13.6-22.5-13.2s-17.8 6.3-21.3 15.1L189.6 333.5l-24.1-48.2c-4.1-8.1-12.4-13.3-21.5-13.3l-80 0L64 64z" />
        <path d="M448 160L288 0l0 128c0 17.7 14.3 32 32 32l128 0zM277.5 221.3c-4.2-8.5-13-13.6-22.5-13.2s-17.8 6.3-21.3 15.1L189.6 333.5l-24.1-48.2c-4.1-8.1-12.4-13.3-21.5-13.3L24 272c-13.3 0-24 10.7-24 24s10.7 24 24 24l105.2 0 41.4 82.7c4.2 8.5 13 13.6 22.5 13.2s17.8-6.3 21.3-15.1l44.2-110.4 8.1 16.2c4.1 8.1 12.4 13.3 21.5 13.3l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-41.2 0-25.4-50.7z" />
    </Icon>
);

export default FileWaveform;