
import { Icon } from "../../index";

/**
 * A component that renders the `audio-description` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/audio-description?s=sharp-light audio-description}
 * @preview ![audio-description](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/audio-description.svg)
 */
const AudioDescription: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 64l0 384L32 448 32 64l512 0zM32 32L0 32 0 64 0 448l0 32 32 0 512 0 32 0 0-32 0-384 0-32-32 0L32 32zM304 160l0 16 0 160 0 16 16 0 64 0c53 0 96-43 96-96s-43-96-96-96l-64 0-16 0zm32 32l48 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-48 0 0-128zM202.3 160l-20.5 0-4.3 9.3L93.4 352l35.2 0 22.1-48 1.3 0 80 0 1.3 0 22.1 48 35.2 0-84-182.7-4.3-9.3zM165.5 272L192 214.3 218.5 272l-53.1 0z" />
    </Icon>
);

export default AudioDescription;