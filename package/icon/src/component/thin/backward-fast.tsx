
import { Icon } from "../../index";

/**
 * A component that renders the `backward-fast` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-fast?s=thin backward-fast}
 * @preview ![backward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/backward-fast.svg)
 */
const BackwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8 64c4.4 0 8 3.6 8 8l0 162.4L207.8 71c5.3-4.5 12-7 19-7C242.9 64 256 77.1 256 93.2L256 248 463.8 71c5.3-4.5 12-7 19-7C498.9 64 512 77.1 512 93.2l0 325.5c0 16.1-13.1 29.2-29.2 29.2c-6.9 0-13.7-2.5-19-7L256 264l0 154.8c0 16.1-13.1 29.2-29.2 29.2c-6.9 0-13.7-2.5-19-7L16 277.6 16 440c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 256 0 72c0-4.4 3.6-8 8-8zm8 192c0 .4 .2 .8 .5 1L218.2 428.8c2.4 2 5.4 3.2 8.6 3.2c7.3 0 13.2-5.9 13.2-13.2l0-325.5c0-7.3-5.9-13.2-13.2-13.2c-3.1 0-6.2 1.1-8.6 3.2L16.5 255c-.3 .3-.5 .6-.5 1zm256 .6L474.2 428.8c2.4 2 5.4 3.2 8.6 3.2c7.3 0 13.2-5.9 13.2-13.2l0-325.5c0-7.3-5.9-13.2-13.2-13.2c-3.1 0-6.2 1.1-8.6 3.2L272 255.4l0 1.2z" />
    </Icon>
);

export default BackwardFast;