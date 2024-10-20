
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone?s=sharp-thin circle-microphone}
 * @preview ![circle-microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-microphone.svg)
 */
const CircleMicrophone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 96l0 8 0 152c0 35.3 28.7 64 64 64s64-28.7 64-64l0-152 0-8-8 0L200 96l-8 0zm16 16l96 0 0 144c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-144zM144 232l0-8-16 0 0 8 0 24c0 68 53 123.6 120 127.8l0 24.2 0 8 16 0 0-8 0-24.2C331 379.6 384 324 384 256l0-24 0-8-16 0 0 8 0 24c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-24z" />
    </Icon>
);

export default CircleMicrophone;