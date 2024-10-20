
import { Icon } from "../../index";

/**
 * A component that renders the `glass-empty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-empty?s=light glass-empty}
 * @preview ![glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/glass-empty.svg)
 */
const GlassEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M40.1 32c-4.7 0-8.4 4-8 8.7l34.6 410C68.1 467.3 81.9 480 98.6 480l186.8 0c16.6 0 30.5-12.7 31.9-29.3l34.6-410c.4-4.7-3.3-8.7-8-8.7L40.1 32zM.2 43.4C-1.7 20 16.7 0 40.1 0L343.8 0c23.4 0 41.8 20 39.9 43.4l-34.6 410c-2.8 33.1-30.5 58.6-63.8 58.6L98.6 512c-33.3 0-61-25.5-63.8-58.6L.2 43.4z" />
    </Icon>
);

export default GlassEmpty;