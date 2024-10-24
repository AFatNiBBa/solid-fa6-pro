
import { Icon } from "../../index";

/**
 * A component that renders the `microphone` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone?s=sharp-regular microphone}
 * @preview ![microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/microphone.svg)
 */
const Microphone: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 48l96 0 0 208c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-208zM96 0l0 48 0 208c0 53 43 96 96 96s96-43 96-96l0-208 0-48L240 0 144 0 96 0zM64 216l0-24-48 0 0 24 0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0-24 0 0 48 24 0 72 0 72 0 24 0 0-48-24 0-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40 0-24-48 0 0 24 0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z" />
    </Icon>
);

export default Microphone;