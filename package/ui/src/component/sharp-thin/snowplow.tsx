
import { Icon } from "../../index";

/**
 * A component that renders the `snowplow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowplow?s=sharp-thin snowplow}
 * @preview ![snowplow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/snowplow.svg)
 */
const Snowplow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0l8 0L320 0l4.8 0 2.2 4.3 96 184 3.7 7.1-14.2 7.4-3.7-7.1L315.2 16 144 16l0 88 0 8-16 0 0-8 0-96 0-8zM537.9 234.8l88-104 12.2 10.3L552 242.9l0 154.1 86.1 101.8-12.2 10.3-88-104-1.9-2.2 0-2.9 0-80-89.6 0c20.7 20.3 33.6 48.7 33.6 80c0 61.9-50.1 112-112 112l-256 0C50.1 512 0 461.9 0 400c0-44.7 26.2-83.2 64-101.2L64 152l0-8 8 0 64 0 3.6 0 2.4 2.6L211.6 224 424 224l8 0 0 8 0 72 104 0 0-64 0-2.9 1.9-2.2zM80 160l0 132.6c10.1-3 20.9-4.6 32-4.6l256 0c17.2 0 33.5 3.9 48 10.8l0-58.8-208 0-3.6 0-2.4-2.6L132.4 160 80 160zM368 304l-256 0c-53 0-96 43-96 96s43 96 96 96l256 0c53 0 96-43 96-96s-43-96-96-96zm16 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM80 400a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Snowplow;