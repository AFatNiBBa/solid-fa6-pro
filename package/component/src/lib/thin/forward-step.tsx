
import { Icon } from "../../index";

/**
 * A component that renders the `forward-step` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=thin forward-step}
 * @preview ![forward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/forward-step.svg)
 */
const ForwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M272 72c0-4.4 3.6-8 8-8s8 3.6 8 8l0 184 0 184c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-162.4L80.2 441c-5.3 4.5-12 7-19 7C45.1 448 32 434.9 32 418.8L32 93.2C32 77.1 45.1 64 61.2 64c6.9 0 13.7 2.5 19 7L272 234.4 272 72zm0 184c0-.4-.2-.8-.5-1L69.8 83.2c-2.4-2-5.4-3.2-8.6-3.2C53.9 80 48 85.9 48 93.2l0 325.5c0 7.3 5.9 13.2 13.2 13.2c3.1 0 6.2-1.1 8.6-3.2L271.5 257c.3-.3 .5-.6 .5-1z" />
    </Icon>
);

export default ForwardStep;