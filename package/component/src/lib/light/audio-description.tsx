
import { Icon } from "../../index";

/**
 * A component that renders the `audio-description` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/audio-description?s=light audio-description}
 * @preview ![audio-description](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/audio-description.svg)
 */
const AudioDescription: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm192 64c6.1 0 11.6 3.4 14.3 8.8l80 160c4 7.9 .7 17.5-7.2 21.5s-17.5 .7-21.5-7.2L238.1 304l-92.2 0-19.6 39.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l80-160c2.7-5.4 8.3-8.8 14.3-8.8zm30.1 112L192 211.8 161.9 272l60.2 0zM304 176c0-8.8 7.2-16 16-16l64 0c53 0 96 43 96 96s-43 96-96 96l-64 0c-8.8 0-16-7.2-16-16l0-160zm32 16l0 128 48 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-48 0z" />
    </Icon>
);

export default AudioDescription;