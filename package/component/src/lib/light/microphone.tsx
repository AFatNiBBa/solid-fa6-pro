
import { Icon } from "../../index";

/**
 * A component that renders the `microphone` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone?s=light microphone}
 * @preview ![microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/microphone.svg)
 */
const Microphone: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 96l0 160c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-160c0-35.3 28.7-64 64-64s64 28.7 64 64zM96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96S96 43 96 96zM64 208c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48c0 83 63.1 151.2 144 159.2l0 64.8-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0 0-64.8c80.9-8 144-76.2 144-159.2l0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-48z" />
    </Icon>
);

export default Microphone;