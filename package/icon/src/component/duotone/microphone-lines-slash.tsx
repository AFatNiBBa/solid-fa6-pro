
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microphone-lines-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone-lines-slash?s=duotone microphone-lines-slash}
 * @preview ![microphone-lines-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/microphone-lines-slash.svg)
 */
const MicrophoneLinesSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M144 216l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c20.4-2.8 39.7-9.1 57.3-18.2l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128l0-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6zM224 96l0 54.3c33.5 26.2 66.9 52.5 100.4 78.7c2.9-3.1 7-5 11.6-5l80 0 0-32-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-32-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0c0-53-43-96-96-96s-96 43-96 96zM358.9 256c16.4 12.8 32.7 25.6 49.1 38.5c5.2-11.8 8-24.8 8-38.5l-57.1 0zm74.9 58.7c12.8 10 25.5 20 38.3 30c15.2-26 23.9-56.3 23.9-88.7l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24 0 16c0 21.2-5.1 41.1-14.2 58.7z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default MicrophoneLinesSlash;