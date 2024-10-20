
import { Icon } from "../../index";

/**
 * A component that renders the `tarp` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp?s=thin tarp}
 * @preview ![tarp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tarp.svg)
 */
const Tarp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 128c0-26.5 21.5-48 48-48l448 0c26.5 0 48 21.5 48 48l0 140.1c0 1.3-.1 2.6-.2 3.9L440 272c-22.1 0-40 17.9-40 40l0 119.8c-1.3 .2-2.6 .2-3.9 .2L64 432c-26.5 0-48-21.5-48-48l0-256zM418.7 422.6c-.9 .9-1.8 1.7-2.7 2.4L416 312c0-13.3 10.7-24 24-24l113.1 0c-.8 1-1.6 1.9-2.4 2.7L418.7 422.6zM576 128c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l332.1 0c12.7 0 24.9-5.1 33.9-14.1L561.9 302.1c9-9 14.1-21.2 14.1-33.9L576 128zM104 152a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM88 120a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default Tarp;