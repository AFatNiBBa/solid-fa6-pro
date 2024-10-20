
import { Icon } from "../../index";

/**
 * A component that renders the `glass-empty` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-empty?s=solid glass-empty}
 * @preview ![glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/glass-empty.svg)
 */
const GlassEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8.6 10.2C14.6 3.7 23.1 0 32 0L352 0c8.9 0 17.4 3.7 23.4 10.2s9.1 15.2 8.5 24.1L355.1 437.7c-3 41.9-37.8 74.3-79.8 74.3l-166.6 0c-42 0-76.8-32.4-79.8-74.3L.1 34.3c-.6-8.9 2.4-17.6 8.5-24.1zM66.4 64L92.7 433.1c.6 8.4 7.6 14.9 16 14.9l166.6 0c8.4 0 15.4-6.5 16-14.9L317.6 64 66.4 64z" />
    </Icon>
);

export default GlassEmpty;