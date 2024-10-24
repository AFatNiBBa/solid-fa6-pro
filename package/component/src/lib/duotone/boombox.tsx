
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boombox` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boombox?s=duotone boombox}
 * @preview ![boombox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/boombox.svg)
 */
const Boombox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224c0-23.7 12.9-44.4 32-55.4c9.4-5.4 20.3-8.6 32-8.6l16 0 112 0 64 0 32 0 64 0 32 0 64 0 112 0 16 0c11.7 0 22.6 3.1 32 8.6c19.1 11.1 32 31.7 32 55.4l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224zM64 336a112 112 0 1 0 224 0A112 112 0 1 0 64 336zm288 0a112 112 0 1 0 224 0 112 112 0 1 0 -224 0z" />
        <path d="M120 48C97.9 48 80 65.9 80 88l0 72-16 0c-11.7 0-22.6 3.1-32 8.6L32 88C32 39.4 71.4 0 120 0L520 0c48.6 0 88 39.4 88 88l0 80.6c-9.4-5.4-20.3-8.6-32-8.6l-16 0 0-72c0-22.1-17.9-40-40-40L120 48zM448 160l-64 0c0-17.7 14.3-32 32-32s32 14.3 32 32zm-96 0l-64 0c0-17.7 14.3-32 32-32s32 14.3 32 32zm-96 0l-64 0c0-17.7 14.3-32 32-32s32 14.3 32 32zM176 416a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM544 336a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-192 0a112 112 0 1 1 224 0 112 112 0 1 1 -224 0z" />
    </Icon>
);

export default Boombox;