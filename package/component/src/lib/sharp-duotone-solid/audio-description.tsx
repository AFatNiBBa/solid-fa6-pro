
import { Icon, generic } from "../../index";

/**
 * A component that renders the `audio-description` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/audio-description?s=sharp-duotone-solid audio-description}
 * @preview ![audio-description](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/audio-description.svg)
 */
const AudioDescription: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l576 0 0-448L0 32zM94.4 352c25.2-59.1 50.4-118.3 75.6-177.4c2.1-4.9 4.1-9.7 6.2-14.6l31.7 0c2.1 4.9 4.1 9.7 6.2 14.6c25.2 59.1 50.4 118.3 75.6 177.4l-52.2 0-10.3-24.2-70.4 0L146.5 352l-52.2 0zm79.5-64.2l36.3 0c-6-14.2-12.1-28.4-18.1-42.6c-6 14.2-12.1 28.4-18.1 42.6zM304 160l24 0 56 0c53 0 96 43 96 96s-43 96-96 96l-56 0-24 0c0-8 0-16 0-24c0-48 0-96 0-144c0-8 0-16 0-24zm48 48l0 96 32 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z" />
        <path d="M207.9 160l-31.7 0-6.2 14.6L94.4 352l52.2 0 10.3-24.2 70.4 0L237.5 352l52.2 0L214.1 174.6 207.9 160zm2.3 127.8l-36.3 0L192 245.2l18.1 42.6zM304 160l0 24 0 144 0 24 24 0 56 0c53 0 96-43 96-96s-43-96-96-96l-56 0-24 0zm48 48l32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-32 0 0-96z" />
    </Icon>
);

export default AudioDescription;