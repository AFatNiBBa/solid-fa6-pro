
import { Icon, generic } from "../../index";

/**
 * A component that renders the `snowplow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowplow?s=duotone snowplow}
 * @preview ![snowplow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/snowplow.svg)
 */
const Snowplow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 400c0-44.7 26.2-83.2 64-101.2c14.5-6.9 30.8-10.8 48-10.8l256 0c44.7 0 83.2 26.2 101.2 64c6.9 14.5 10.8 30.8 10.8 48c0 61.9-50.1 112-112 112l-256 0C50.1 512 0 461.9 0 400zm64 0c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-256 0c-26.5 0-48 21.5-48 48z" />
        <path d="M298.9 64l68.6 160L256 224l-64-64 0-96 106.9 0zM445.1 242.7l-87.4-204C347.6 15.3 324.5 0 298.9 0L176 0c-26.5 0-48 21.5-48 48l0 112-32 0c-17.7 0-32 14.3-32 32l0 106.8c14.5-6.9 30.8-10.8 48-10.8l256 0c44.7 0 83.2 26.2 101.2 64l42.8 0 0 50.7c0 17 6.7 33.3 18.7 45.3l54.6 54.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L576 402.7l0-82.7 0-84.8L633 164c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-57 71.2c-9.1 11.3-14 25.4-14 40l0 52.8-64 0 0-31.3c.1-2.4-.2-4.8-.6-7.1s-1.2-4.7-2.2-6.8zM144 400a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm216 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-56-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM200 424a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Snowplow;