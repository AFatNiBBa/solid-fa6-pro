
import { Icon } from "../../index";

/**
 * A component that renders the `globe-stand` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-stand?s=light globe-stand}
 * @preview ![globe-stand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/globe-stand.svg)
 */
const GlobeStand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M28.7 348.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l10-10C99 394.1 145.1 412.1 192 415.4l0 64.6L80 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-112 0 0-64.6c51.9-3.7 102.7-25.4 142.4-65c83.7-83.7 87.3-217.1 10.9-305.1l10-10c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L343.8 33.6c-6.2 6.2-6.2 16.4 0 22.6c75 75 75 196.5 0 271.5s-196.5 75-271.5 0c-6.2-6.2-16.4-6.2-22.6 0L28.7 348.7zM80 192a128 128 0 1 1 256 0A128 128 0 1 1 80 192zm288 0A160 160 0 1 0 48 192a160 160 0 1 0 320 0z" />
    </Icon>
);

export default GlobeStand;