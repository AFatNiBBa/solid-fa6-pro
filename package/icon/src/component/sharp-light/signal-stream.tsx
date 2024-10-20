
import { Icon } from "../../index";

/**
 * A component that renders the `signal-stream` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-stream?s=sharp-light signal-stream}
 * @preview ![signal-stream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/signal-stream.svg)
 */
const SignalStream: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 256c0 59.9-20.6 115-55.1 158.6l25.1 19.8C552.8 385.4 576 323.4 576 256s-23.2-129.4-61.9-178.5L488.9 97.4C523.4 141 544 196.1 544 256zM32 256c0-59.9 20.6-115 55.1-158.6L61.9 77.5C23.2 126.6 0 188.6 0 256s23.2 129.4 61.9 178.5l25.1-19.8C52.6 371 32 315.9 32 256zm64 0c0 44.9 15.4 86.3 41.3 119l25.1-19.8C140.9 327.9 128 293.4 128 256s12.9-71.9 34.4-99.1L137.3 137C111.4 169.7 96 211.1 96 256zm384 0c0-44.9-15.4-86.3-41.3-119l-25.1 19.8C435.1 184.1 448 218.6 448 256s-12.9 71.9-34.4 99.1L438.7 375c25.9-32.7 41.3-74 41.3-119zM288 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default SignalStream;