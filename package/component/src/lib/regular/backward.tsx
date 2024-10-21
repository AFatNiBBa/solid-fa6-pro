
import { Icon } from "../../index";

/**
 * A component that renders the `backward` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=regular backward}
 * @preview ![backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/backward.svg)
 */
const Backward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 94c0-16.6-13.5-30-30-30c-6.3 0-12.5 2-17.6 5.7L9.9 236.6C3.7 241.1 0 248.3 0 256s3.7 14.9 9.9 19.4L240.3 442.3c5.1 3.7 11.3 5.7 17.6 5.7c16.6 0 30-13.4 30-30l0-99.1L464.7 442.6c5.1 3.5 11.1 5.4 17.3 5.4c16.6 0 30.1-13.5 30.1-30.1l0-323.8C512 77.5 498.5 64 481.9 64c-6.2 0-12.2 1.9-17.3 5.4L288 193.1 288 94zm0 157.7L464 128.5l0 255L288 260.3l0-8.6zM64.9 256L240 129.2l0 253.6L64.9 256z" />
    </Icon>
);

export default Backward;