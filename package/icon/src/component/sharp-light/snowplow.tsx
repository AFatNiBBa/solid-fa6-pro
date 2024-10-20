
import { Icon } from "../../index";

/**
 * A component that renders the `snowplow` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowplow?s=sharp-light snowplow}
 * @preview ![snowplow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/snowplow.svg)
 */
const Snowplow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0l16 0L320 0l10.4 0 4.2 9.5 96 216 1.4 3.1 0 3.4 0 56 96 0 0-48 0-5.8 3.7-4.4 80-96 24.6 20.5L560 245.8l0 42.2 0 32 0 74.2 76.3 91.5-24.6 20.5-80-96-3.7-4.5 0-5.8 0-80-81.6 0c20.7 20.3 33.6 48.7 33.6 80c0 61.9-50.1 112-112 112l-256 0C50.1 512 0 461.9 0 400c0-44.7 26.2-83.2 64-101.2L64 144l0-16 16 0 48 0 0-112 0-16zM400 292.6l0-4.6 0-32-192 0-8.6 0-4.8-7.1L135.4 160l-7.4 0-32 0 0 129.1c5.2-.7 10.6-1.1 16-1.1l256 0c11.1 0 21.9 1.6 32 4.6zM160 139.2L216.6 224l178.4 0L309.6 32 160 32l0 107.2zM368 320l-256 0c-44.2 0-80 35.8-80 80s35.8 80 80 80l256 0c44.2 0 80-35.8 80-80s-35.8-80-80-80zM120 376a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Snowplow;