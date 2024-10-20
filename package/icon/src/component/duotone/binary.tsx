
import { Icon, generic } from "../../index";

/**
 * A component that renders the `binary` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary?s=duotone binary}
 * @preview ![binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/binary.svg)
 */
const Binary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 96c0 35.3 28.7 64 64 64l64 0c35.3 0 64-28.7 64-64l0-96c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zm64 0l64 0 0 96-64 0 0-96zM192 352l0 96c0 35.3 28.7 64 64 64l64 0c35.3 0 64-28.7 64-64l0-96c0-35.3-28.7-64-64-64l-64 0c-35.3 0-64 28.7-64 64zm64 0l64 0 0 96-64 0 0-96z" />
        <path d="M336 32c0-10.3-4.9-19.9-13.3-26s-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2 0 83.6-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l48 0 48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-128zM112 320c0-10.3-4.9-19.9-13.3-26s-19.1-7.7-28.8-4.4l-48 16C5.1 311.2-3.9 329.4 1.6 346.1s23.7 25.8 40.5 20.2l5.9-2L48 448l-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l48 0 48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-128z" />
    </Icon>
);

export default Binary;