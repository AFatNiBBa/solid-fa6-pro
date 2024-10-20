
import { Icon } from "../../index";

/**
 * A component that renders the `microphone-lines` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone-lines?s=thin microphone-lines}
 * @preview ![microphone-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/microphone-lines.svg)
 */
const MicrophoneLines: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M272 112l0-16c0-44.2-35.8-80-80-80s-80 35.8-80 80l0 160c0 44.2 35.8 80 80 80s80-35.8 80-80l-72 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l72 0 0-48-72 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l72 0 0-48-72 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l72 0zm16 8l0 64 0 64 0 8c0 53-43 96-96 96s-96-43-96-96L96 96c0-53 43-96 96-96s96 43 96 96l0 24zM40 192c4.4 0 8 3.6 8 8l0 56c0 79.5 64.5 144 144 144s144-64.5 144-144l0-56c0-4.4 3.6-8 8-8s8 3.6 8 8l0 56c0 85.7-67.4 155.6-152 159.8l0 80.2 80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-88 0-88 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l80 0 0-80.2C99.4 411.6 32 341.7 32 256l0-56c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default MicrophoneLines;