
import { Icon } from "../../index";

/**
 * A component that renders the `audio-description` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/audio-description?s=thin audio-description}
 * @preview ![audio-description](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/audio-description.svg)
 */
const AudioDescription: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm192 64c3 0 5.8 1.7 7.2 4.4l55.9 111.9 .1 .3 31.9 63.8c2 4 .4 8.8-3.6 10.7s-8.8 .4-10.7-3.6L243.1 288l-102.1 0-29.8 59.6c-2 4-6.8 5.6-10.7 3.6s-5.6-6.8-3.6-10.7l31.9-63.8 .1-.3 55.9-111.9c1.4-2.7 4.1-4.4 7.2-4.4zm43.1 112L192 185.9 148.9 272l86.1 0zM312 168c0-4.4 3.6-8 8-8l64 0c53 0 96 43 96 96s-43 96-96 96l-64 0c-4.4 0-8-3.6-8-8l0-176zm16 8l0 160 56 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-56 0z" />
    </Icon>
);

export default AudioDescription;