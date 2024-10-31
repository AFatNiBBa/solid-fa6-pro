
import { Icon } from "../../index";

/**
 * A component that renders the `tarp` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp?s=light tarp}
 * @preview ![tarp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tarp.svg)
 */
const Tarp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 384l0-256c0-17.7 14.3-32 32-32l448 0c17.7 0 32 14.3 32 32l0 128-112 0c-26.5 0-48 21.5-48 48l0 112L64 416c-17.7 0-32-14.3-32-32zm391.4 27.3c-2.1 2.1-4.6 3.5-7.4 4.2L416 304c0-8.8 7.2-16 16-16l111.5 0c-.7 2.8-2.1 5.4-4.2 7.4L423.4 411.3zM576 128c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l348.1 0c12.7 0 24.9-5.1 33.9-14.1L561.9 318.1c9-9 14.1-21.2 14.1-33.9L576 128zM96 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Tarp;