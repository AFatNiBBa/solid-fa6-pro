
import { Icon } from "../../index";

/**
 * A component that renders the `tarp` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp?s=regular tarp}
 * @preview ![tarp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tarp.svg)
 */
const Tarp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 128c0-8.8 7.2-16 16-16l448 0c8.8 0 16 7.2 16 16l0 160-80 0c-17.7 0-32 14.3-32 32l0 80L64 400c-8.8 0-16-7.2-16-16l0-256zm528 0c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l364.1 0c12.7 0 24.9-5.1 33.9-14.1l99.9-99.9c9-9 14.1-21.2 14.1-33.9L576 128zM112 208a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Tarp;