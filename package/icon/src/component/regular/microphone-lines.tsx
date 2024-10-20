
import { Icon } from "../../index";

/**
 * A component that renders the `microphone-lines` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone-lines?s=regular microphone-lines}
 * @preview ![microphone-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/microphone-lines.svg)
 */
const MicrophoneLines: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M240 128l0 32-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 0 32-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-160c0-26.5 21.5-48 48-48s48 21.5 48 48l-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0zM96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96S96 43 96 96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z" />
    </Icon>
);

export default MicrophoneLines;