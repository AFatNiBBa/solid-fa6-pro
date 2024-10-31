
import { Icon } from "../../index";

/**
 * A component that renders the `snowplow` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowplow?s=sharp-regular snowplow}
 * @preview ![snowplow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/snowplow.svg)
 */
const Snowplow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M136 0L112 0l0 24 0 104-40 0-24 0 0 24 0 156.1C19 328.3 0 361.9 0 400c0 61.9 50.1 112 112 112l256 0c61.9 0 112-50.1 112-112c0-20.4-5.5-39.5-15-56l47 0 0 56 0 9.3 6.2 6.9 80 88 35.5-32.3L560 390.7l0-141.4 73.8-81.1-35.5-32.3-80 88-6.2 6.9 0 9.3 0 56-80 0 0-64 0-24 0-5.4-2.3-4.9-88-184L335.1 0 320 0 136 0zM381.4 208l-161.9 0-56.8-71-2.7-3.4L160 48l144.9 0 76.5 160zM132.5 176l56.8 71 7.2 9 11.5 0 176 0 0 33.1c-5.2-.7-10.6-1.1-16-1.1l-256 0c-5.4 0-10.8 .4-16 1.1L96 176l16 0 20.5 0zM112 336l256 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64s28.7-64 64-64zm32 64a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm104-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Snowplow;