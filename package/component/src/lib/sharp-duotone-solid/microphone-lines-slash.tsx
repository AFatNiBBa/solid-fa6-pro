
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microphone-lines-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone-lines-slash?s=sharp-duotone-solid microphone-lines-slash}
 * @preview ![microphone-lines-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/microphone-lines-slash.svg)
 */
const MicrophoneLinesSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M144 209.5l0 6.5 0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0-24 0 0 48 24 0 72 0 72 0 24 0 0-48-24 0-48 0 0-33.6c20.4-2.8 39.7-9.1 57.3-18.2l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128l0-8.7-48-37.8zM224 0l0 151.1c32 24.8 64 49.7 96 73.7l0-.8 16 0 80 0 0-32-80 0-16 0 0-32 16 0 80 0 0-32-80 0-16 0 0-32 16 0 80 0 0-96L224 0zM359.1 256l49.1 38.1c5.1-11.7 7.9-24.6 7.9-38.1l-56.9 0zm75 58.2c12.8 9.9 25.6 19.9 38.4 29.8c15-25.9 23.6-56 23.6-88l0-40 0-24-48 0 0 24 0 8 0 32c0 21-5 40.7-14 58.2z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L18.9 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default MicrophoneLinesSlash;