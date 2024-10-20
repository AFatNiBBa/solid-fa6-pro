
import { Icon } from "../../index";

/**
 * A component that renders the `forward-fast` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-fast?s=thin forward-fast}
 * @preview ![forward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/forward-fast.svg)
 */
const ForwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path d="M504 64c-4.4 0-8 3.6-8 8l0 162.4L304.2 71c-5.3-4.5-12-7-19-7C269.1 64 256 77.1 256 93.2L256 248 48.2 71c-5.3-4.5-12-7-19-7C13.1 64 0 77.1 0 93.2L0 418.8C0 434.9 13.1 448 29.2 448c6.9 0 13.7-2.5 19-7L256 264l0 154.8c0 16.1 13.1 29.2 29.2 29.2c6.9 0 13.7-2.5 19-7L496 277.6 496 440c0 4.4 3.6 8 8 8s8-3.6 8-8l0-184 0-184c0-4.4-3.6-8-8-8zm-8 192c0 .4-.2 .8-.5 1L293.8 428.8c-2.4 2-5.4 3.2-8.6 3.2c-7.3 0-13.2-5.9-13.2-13.2l0-325.5c0-7.3 5.9-13.2 13.2-13.2c3.1 0 6.2 1.1 8.6 3.2L495.5 255c.3 .3 .5 .6 .5 1zm-256 .6L37.8 428.8c-2.4 2-5.4 3.2-8.6 3.2c-7.3 0-13.2-5.9-13.2-13.2L16 93.2C16 85.9 21.9 80 29.2 80c3.1 0 6.2 1.1 8.6 3.2L240 255.4l0 1.2z" />
    </Icon>
);

export default ForwardFast;