
import { Icon } from "../../index";

/**
 * A component that renders the `snowplow` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowplow?s=regular snowplow}
 * @preview ![snowplow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/snowplow.svg)
 */
const Snowplow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M298.8 48c3.2 0 6.1 1.9 7.4 4.9L371.8 208l-152.3 0-56.8-71-2.7-3.4L160 48l138.8 0zM429 220.3c-.4-1.2-.9-2.4-1.4-3.6L350.4 34.2C341.6 13.5 321.3 0 298.8 0L152 0c-22.1 0-40 17.9-40 40l0 88-16 0c-26.5 0-48 21.5-48 48l0 132.1C19 328.3 0 361.9 0 400c0 61.9 50.1 112 112 112l256 0c61.9 0 112-50.1 112-112c0-20.4-5.5-39.5-15-56l47 0 0 56c0 6 2.2 11.7 6.2 16.1l80 88c8.9 9.8 24.1 10.5 33.9 1.6s10.5-24.1 1.6-33.9L560 390.7l0-141.4 73.8-81.1c8.9-9.8 8.2-25-1.6-33.9s-25-8.2-33.9 1.6l-80 88c-4 4.4-6.2 10.2-6.2 16.1l0 56-80 0 0-57.5 0-6.5c0-4.2-1.1-8.2-3-11.7zm-45 68.8c-5.2-.7-10.6-1.1-16-1.1l-256 0c-5.4 0-10.8 .4-16 1.1L96 176l36.5 0 56.8 71c4.6 5.7 11.4 9 18.7 9l176 0 0 33.1zM112 336l256 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64s28.7-64 64-64zm32 64a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm104-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Snowplow;