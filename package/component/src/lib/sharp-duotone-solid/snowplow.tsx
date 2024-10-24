
import { Icon, generic } from "../../index";

/**
 * A component that renders the `snowplow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowplow?s=sharp-duotone-solid snowplow}
 * @preview ![snowplow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/snowplow.svg)
 */
const Snowplow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 400c0-44.7 26.2-83.2 64-101.2c14.5-6.9 30.8-10.8 48-10.8l256 0c44.7 0 83.2 26.2 101.2 64c6.9 14.5 10.8 30.8 10.8 48c0 61.9-50.1 112-112 112l-256 0C50.1 512 0 461.9 0 400zm64 0c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-256 0c-26.5 0-48 21.5-48 48z" />
        <path d="M160 0L128 0l0 32 0 128-64 0 0 138.8c14.5-6.9 30.8-10.8 48-10.8l256 0c44.7 0 83.2 26.2 101.2 64l42.8 0 0 64 0 13.3 9.4 9.4 64 64 45.3-45.3L576 402.7l0-50.7 0-64 0-52.8L633 164l-50-40-64 80-7 8.8 0 11.2 0 64-64 0 0-32 0-32 0-7.6-3.4-6.8-96-192L339.8 0 320 0 160 0zM380.2 224L256 224l-64-64 0-96 108.2 0 80 160zM144 400a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm216 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-56-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM200 424a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Snowplow;