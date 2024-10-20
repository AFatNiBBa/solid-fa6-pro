
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone?s=light circle-microphone}
 * @preview ![circle-microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-microphone.svg)
 */
const CircleMicrophone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm192-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-96zm64-32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32zM144 224c8.8 0 16 7.2 16 16l0 16c0 53 43 96 96 96s96-43 96-96l0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16c0 65.3-48.9 119.1-112 127l0 17c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-17c-63.1-7.9-112-61.7-112-127l0-16c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default CircleMicrophone;