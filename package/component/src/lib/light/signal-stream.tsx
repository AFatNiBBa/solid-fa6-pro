
import { Icon } from "../../index";

/**
 * A component that renders the `signal-stream` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-stream?s=light signal-stream}
 * @preview ![signal-stream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/signal-stream.svg)
 */
const SignalStream: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M90.3 68.5c6.8 5.7 7.6 15.8 1.9 22.5C54.6 135.6 32 193.1 32 256s22.6 120.4 60.2 165c5.7 6.8 4.8 16.8-1.9 22.5s-16.8 4.8-22.5-1.9C25.5 391.5 0 326.7 0 256S25.5 120.5 67.8 70.4c5.7-6.8 15.8-7.6 22.5-1.9zm395.4 0c6.8-5.7 16.8-4.8 22.5 1.9C550.5 120.5 576 185.3 576 256s-25.5 135.5-67.8 185.6c-5.7 6.8-15.8 7.6-22.5 1.9s-7.6-15.8-1.9-22.5C521.4 376.4 544 318.9 544 256s-22.6-120.4-60.2-165c-5.7-6.8-4.8-16.8 1.9-22.5zM224 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM164.6 154.2C141.7 181.9 128 217.3 128 256s13.7 74.1 36.6 101.8c5.6 6.8 4.7 16.9-2.1 22.5s-16.9 4.7-22.5-2.1C112.5 345 96 302.4 96 256s16.5-89 43.9-122.2c5.6-6.8 15.7-7.8 22.5-2.1s7.8 15.7 2.1 22.5zm271.5-20.4C463.5 167 480 209.6 480 256s-16.5 89-43.9 122.2c-5.6 6.8-15.7 7.8-22.5 2.1s-7.8-15.7-2.1-22.5C434.3 330.1 448 294.7 448 256s-13.7-74.1-36.6-101.8c-5.6-6.8-4.7-16.9 2.1-22.5s16.9-4.7 22.5 2.1z" />
    </Icon>
);

export default SignalStream;