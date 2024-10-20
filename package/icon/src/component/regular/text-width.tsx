
import { Icon } from "../../index";

/**
 * A component that renders the `text-width` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-width?s=regular text-width}
 * @preview ![text-width](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/text-width.svg)
 */
const TextWidth: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 112l0-32 152 0 0 160-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-160 152 0 0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c0-22.1-17.9-40-40-40L40 32C17.9 32 0 49.9 0 72l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24zM441 401c9.4-9.4 9.4-24.6 0-33.9l-64-64c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l23 23L81.9 360l23-23c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 367c-9.4 9.4-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-23-23 284.1 0-23 23c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l64-64z" />
    </Icon>
);

export default TextWidth;