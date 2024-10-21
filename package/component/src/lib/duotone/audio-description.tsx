
import { Icon, generic } from "../../index";

/**
 * A component that renders the `audio-description` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/audio-description?s=duotone audio-description}
 * @preview ![audio-description](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/audio-description.svg)
 */
const AudioDescription: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM98.5 317.3c24-48 48-96 72-144c4.1-8.1 12.4-13.3 21.5-13.3s17.4 5.1 21.5 13.3c24 48 48 96 72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7l-9.4-18.9-82.2 0c-3.1 6.3-6.3 12.6-9.4 18.9c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2zm72.4-37.4l42.2 0c-7-14.1-14.1-28.1-21.1-42.2c-7 14.1-14.1 28.1-21.1 42.2zm133.2-98.3c.1-.8 .2-1.6 .4-2.4c.3-1.6 .8-3.1 1.4-4.5c1.2-2.9 3-5.5 5.1-7.6c4.3-4.3 10.3-7 17-7l56 0c53 0 96 43 96 96s-43 96-96 96l-56 0c-6.6 0-12.6-2.7-17-7c-2.2-2.2-3.9-4.8-5.1-7.6c-.6-1.4-1.1-2.9-1.4-4.5c-.2-.8-.3-1.6-.4-2.4s-.1-1.6-.1-2.5c0-48 0-96 0-144.3c0-.6 0-1.4 .1-2.2zM352 208l0 96 32 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z" />
        <path d="M192 160c9.1 0 17.4 5.1 21.5 13.3l72 144c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7l-9.4-18.9-82.2 0-9.4 18.9c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l72-144c4.1-8.1 12.4-13.3 21.5-13.3zM170.9 279.8l42.2 0L192 237.7l-21.1 42.2zM304 184c0-13.3 10.7-24 24-24l56 0c53 0 96 43 96 96s-43 96-96 96l-56 0c-13.3 0-24-10.7-24-24l0-144zm48 24l0 96 32 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z" />
    </Icon>
);

export default AudioDescription;