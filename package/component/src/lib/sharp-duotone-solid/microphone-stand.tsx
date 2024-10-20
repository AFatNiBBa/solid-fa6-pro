
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microphone-stand` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone-stand?s=sharp-duotone-solid microphone-stand}
 * @preview ![microphone-stand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/microphone-stand.svg)
 */
const MicrophoneStand: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448L256 140.7 371.3 256c-27.8 23.1-55.5 46.3-83.3 69.4l-64 53.3C170.7 423.1 117.3 467.5 64 512L0 448zM293.5 60.1c7.5-7.5 15.1-15.1 22.6-22.6L474.5 195.9l-11.3 11.3c-3.8 3.8-7.5 7.5-11.3 11.3C399.1 165.7 346.3 112.9 293.5 60.1z" />
        <path d="M479.2 32.8c43.7 43.7 43.7 114.7 0 158.4l-4.7 4.7L316.1 37.5l4.7-4.7c43.7-43.7 114.7-43.7 158.4 0zM293.5 60.1L451.9 218.5l-4.7 4.7c-21 21-48.4 32-75.9 32.8c0 0 0 0 0 0L256 140.7c.8-27.6 11.7-54.9 32.8-75.9l4.7-4.7zM224 480l0-101.3 64-53.3L288 480l0 32-64 0 0-32z" />
    </Icon>
);

export default MicrophoneStand;