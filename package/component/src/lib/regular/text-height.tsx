
import { Icon } from "../../index";

/**
 * A component that renders the `text-height` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-height?s=regular text-height}
 * @preview ![text-height](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/text-height.svg)
 */
const TextHeight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 128l0-48 88 0 0 352-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-352 88 0 0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-56c0-22.1-17.9-40-40-40L40 32C17.9 32 0 49.9 0 72l0 56c0 13.3 10.7 24 24 24s24-10.7 24-24zM497 39c-9.4-9.4-24.6-9.4-33.9 0l-64 64c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 284.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-284.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L497 39z" />
    </Icon>
);

export default TextHeight;