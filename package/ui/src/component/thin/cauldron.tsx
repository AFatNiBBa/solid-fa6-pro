
import { Icon } from "../../index";

/**
 * A component that renders the `cauldron` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cauldron?s=thin cauldron}
 * @preview ![cauldron](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cauldron.svg)
 */
const Cauldron: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm48 48a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM46.1 237.2c14.4-26.5 30.7-48.7 41.2-61.2L224 176l136.7 0c10.5 12.5 26.8 34.7 41.2 61.2c16.9 31 30.1 65.9 30.1 97.2c0 50.9-24.5 90.8-62.7 118.4C330.7 480.7 278.1 496 224 496s-106.7-15.3-145.3-43.2c-18.3-13.2-33.4-29.2-44.2-47.9L32 400l0 .5c-10.3-19.3-16-41.4-16-66.1c0-31.2 13.2-66.2 30.1-97.2zM0 334.4c0 37.4 11.9 69.4 32 95.5L32 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56.1C90.7 489.6 156.7 512 224 512s133.3-22.4 176-64.1l0 56.1c0 4.4 3.6 8 8 8s8-3.6 8-8l0-74.1c20.1-26.1 32-58.1 32-95.5c0-58.8-40.9-124.6-66.8-158.4l58.8 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-72 0-144 0L80 160 8 160c-4.4 0-8 3.6-8 8s3.6 8 8 8l58.8 0C40.9 209.8 0 275.6 0 334.4z" />
    </Icon>
);

export default Cauldron;