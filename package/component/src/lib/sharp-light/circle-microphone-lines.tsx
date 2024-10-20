
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone-lines` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone-lines?s=sharp-light circle-microphone-lines}
 * @preview ![circle-microphone-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-microphone-lines.svg)
 */
const CircleMicrophoneLines: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 96l-16 0 0 16 0 144c0 35.3 28.7 64 64 64s64-28.7 64-64l0-32 0-32 0-32 0-48 0-16-16 0-96 0zm80 64l-16 0-16 0 0 32 16 0 16 0 0 32-16 0-16 0 0 32 16 0 16 0c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128 64 0 0 32zM160 240l0-16-32 0 0 16 0 16c0 65.3 48.9 119.1 112 127l0 17 0 16 32 0 0-16 0-17c63.1-7.9 112-61.7 112-127l0-16 0-16-32 0 0 16 0 16c0 53-43 96-96 96s-96-43-96-96l0-16z" />
    </Icon>
);

export default CircleMicrophoneLines;