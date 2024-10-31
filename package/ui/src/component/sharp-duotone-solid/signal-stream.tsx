
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signal-stream` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-stream?s=sharp-duotone-solid signal-stream}
 * @preview ![signal-stream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/signal-stream.svg)
 */
const SignalStream: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 67.4 23.2 129.4 61.9 178.5l50.2-39.7C82 356.6 64 308.5 64 256s18-100.6 48.2-138.8L61.9 77.5C23.2 126.6 0 188.6 0 256zm112 0c0 41.2 14.2 79.1 37.9 109.1l50.2-39.7C185 306.3 176 282.2 176 256s9-50.3 24.1-69.4l-50.2-39.7C126.2 176.9 112 214.8 112 256zm263.9-69.4C391 205.7 400 229.8 400 256s-9 50.3-24.1 69.4l50.2 39.7c23.7-30 37.9-67.9 37.9-109.1s-14.2-79.1-37.9-109.1l-50.2 39.7zm87.9-69.4C494 155.4 512 203.5 512 256s-18 100.6-48.2 138.8l50.2 39.7C552.8 385.4 576 323.4 576 256s-23.2-129.4-61.9-178.5l-50.2 39.7z" />
        <path d="M232 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0z" />
    </Icon>
);

export default SignalStream;