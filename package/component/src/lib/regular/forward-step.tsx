
import { Icon } from "../../index";

/**
 * A component that renders the `forward-step` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=regular forward-step}
 * @preview ![forward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/forward-step.svg)
 */
const ForwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M240 88c0-13.3 10.7-24 24-24s24 10.7 24 24l0 138.7 0 58.6L288 424c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-105.1L63.3 442.6c-5.1 3.5-11.1 5.4-17.3 5.4C29.5 448 16 434.5 16 417.9L16 94.1C16 77.5 29.5 64 46.1 64c6.2 0 12.2 1.9 17.3 5.4L240 193.1 240 88zm0 172.3l0-8.6L64 128.5l0 255L240 260.3z" />
    </Icon>
);

export default ForwardStep;