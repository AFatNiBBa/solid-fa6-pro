
import { Icon } from "../../index";

/**
 * A component that renders the `backward` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=thin backward}
 * @preview ![backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/backward.svg)
 */
const Backward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M258 80c-3 0-5.8 .9-8.2 2.7L19.3 249.5C17.2 251 16 253.4 16 256s1.2 5 3.3 6.5L249.7 429.3c2.4 1.7 5.3 2.7 8.2 2.7c7.8 0 14-6.3 14-14L272 94c0-7.8-6.3-14-14-14zm0-16c16.6 0 30 13.5 30 30l0 103.4L464.3 69.7C469.5 66 475.6 64 482 64c16.6 0 30 13.5 30 30L512 418c0 16.6-13.4 30-30 30c-6.3 0-12.5-2-17.6-5.7L288 314.6 288 418c0 16.6-13.5 30-30 30c-6.3 0-12.5-2-17.6-5.7L9.9 275.4C3.7 270.9 0 263.7 0 256s3.7-14.9 9.9-19.4L240.3 69.7C245.5 66 251.6 64 258 64zm30 230.8L473.7 429.3c2.4 1.7 5.3 2.7 8.2 2.7c7.8 0 14-6.3 14-14L496 94c0-7.8-6.3-14-14-14c-3 0-5.8 .9-8.2 2.7L288 217.2l0 77.7z" />
    </Icon>
);

export default Backward;