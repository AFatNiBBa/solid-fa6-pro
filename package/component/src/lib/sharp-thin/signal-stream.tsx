
import { Icon } from "../../index";

/**
 * A component that renders the `signal-stream` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-stream?s=sharp-thin signal-stream}
 * @preview ![signal-stream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/signal-stream.svg)
 */
const SignalStream: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 256c0-68.2-25.1-130.6-66.6-178.3l12.1-10.5C549.4 117.7 576 183.8 576 256s-26.6 138.3-70.5 188.8l-12.1-10.5C534.9 386.6 560 324.2 560 256zM16 256c0 68.2 25.1 130.6 66.6 178.3L70.5 444.8C26.6 394.3 0 328.2 0 256S26.6 117.7 70.5 67.2L82.6 77.7C41.1 125.4 16 187.8 16 256zm80 0c0-48.2 17.7-92.2 47-125.9l12.1 10.5C128.3 171.5 112 211.8 112 256s16.3 84.5 43.1 115.4L143 381.9C113.7 348.2 96 304.2 96 256zm384 0c0 48.2-17.7 92.2-47 125.9l-12.1-10.5C447.7 340.5 464 300.2 464 256s-16.3-84.5-43.1-115.4L433 130.1c29.3 33.7 47 77.7 47 125.9zM288 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm32 48a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default SignalStream;