
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone-lines` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone-lines?s=light circle-microphone-lines}
 * @preview ![circle-microphone-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-microphone-lines.svg)
 */
const CircleMicrophoneLines: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-416c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64s64-28.7 64-64l0-16 0-64 0-16c0-35.3-28.7-64-64-64zm32 64l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 32-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32s32 14.3 32 32zM160 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16c0 65.3 48.9 119.1 112 127l0 17c0 8.8 7.2 16 16 16s16-7.2 16-16l0-17c63.1-7.9 112-61.7 112-127l0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16c0 53-43 96-96 96s-96-43-96-96l0-16z" />
    </Icon>
);

export default CircleMicrophoneLines;