
import { Icon } from "../../index";

/**
 * A component that renders the `microphone-lines` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone-lines?s=sharp-thin microphone-lines}
 * @preview ![microphone-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/microphone-lines.svg)
 */
const MicrophoneLines: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M272 16L112 16l0 240c0 44.2 35.8 80 80 80s80-35.8 80-80l-72 0-8 0 0-16 8 0 72 0 0-48-72 0-8 0 0-16 8 0 72 0 0-48-72 0-8 0 0-16 8 0 72 0 0-96zm16 96l0 16 0 48 0 16 0 48 0 16c0 53-43 96-96 96s-96-43-96-96L96 16 96 0l16 0L272 0l16 0 0 16 0 96zM48 192l0 8 0 56c0 79.5 64.5 144 144 144s144-64.5 144-144l0-56 0-8 16 0 0 8 0 56c0 85.7-67.4 155.6-152 159.8l0 80.2 80 0 8 0 0 16-8 0-88 0-88 0-8 0 0-16 8 0 80 0 0-80.2C99.4 411.6 32 341.7 32 256l0-56 0-8 16 0z" />
    </Icon>
);

export default MicrophoneLines;