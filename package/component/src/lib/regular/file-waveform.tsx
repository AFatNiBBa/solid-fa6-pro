
import { Icon } from "../../index";

/**
 * A component that renders the `file-waveform` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-waveform?s=regular file-waveform}
 * @preview ![file-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-waveform.svg)
 */
const FileWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 464l-256 0c-8.8 0-16-7.2-16-16l0-96-48 0 0 96c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L338.7 18.7C326.7 6.7 310.5 0 293.5 0L128 0C92.7 0 64 28.7 64 64l0 176 48 0 0-176c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16zM276.8 228.1c-4.4-7.7-12.7-12.3-21.5-12.1s-16.8 5.3-20.8 13.3l-45.5 91L164 282.7C159.5 276 152 272 144 272L24 272c-13.3 0-24 10.7-24 24s10.7 24 24 24l107.2 0L172 381.3c4.7 7.1 12.9 11.2 21.5 10.6s16.1-5.6 20-13.2l43.9-87.9 9.8 17.1c4.3 7.5 12.2 12.1 20.8 12.1l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-26.1 0-25.1-43.9z" />
    </Icon>
);

export default FileWaveform;