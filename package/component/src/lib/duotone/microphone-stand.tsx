
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microphone-stand` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone-stand?s=duotone microphone-stand}
 * @preview ![microphone-stand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/microphone-stand.svg)
 */
const MicrophoneStand: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M7.8 427c-11 12.7-10.3 31.7 1.6 43.6l32 32c11.9 11.9 30.9 12.6 43.6 1.6c46.4-40.2 92.7-80.3 139-120.5c21.3-18.5 42.7-37 64-55.5c27.8-24.1 55.6-48.2 83.4-72.3L256.1 140.6 7.8 427zM293.5 60.1c52.8 52.8 105.6 105.6 158.4 158.4c3.8-3.8 7.5-7.5 11.3-11.3l11.3-11.3L316.1 37.5C308.6 45 301 52.6 293.5 60.1z" />
        <path d="M479.2 32.8c43.7 43.7 43.7 114.7 0 158.4l-4.7 4.7L316.1 37.5l4.7-4.7c43.7-43.7 114.7-43.7 158.4 0zM293.5 60.1L451.9 218.5l-4.7 4.7c-21 21-48.3 31.9-75.8 32.8c0 0 0 0 0 0L256.1 140.6s0 0 0 0c.8-27.5 11.7-54.8 32.8-75.8l4.7-4.7zM224 480l0-96.3 64-55.5L288 480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
    </Icon>
);

export default MicrophoneStand;