
import { Icon } from "../../index";

/**
 * A component that renders the `audio-description` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/audio-description?s=sharp-thin audio-description}
 * @preview ![audio-description](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/audio-description.svg)
 */
const AudioDescription: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 48l0 416 544 0 0-416L16 48zM0 32l16 0 544 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM186.9 160l10.2 0 2.1 4.6L286.1 352l-17.6 0-29.7-64-93.6 0-29.7 64-17.6 0 86.9-187.4 2.1-4.6zm44.5 112L192 187l-39.4 85 78.8 0zM312 160l8 0 64 0c53 0 96 43 96 96s-43 96-96 96l-64 0-8 0 0-8 0-176 0-8zm16 16l0 160 56 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-56 0z" />
    </Icon>
);

export default AudioDescription;