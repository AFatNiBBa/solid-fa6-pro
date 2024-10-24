
import { Icon } from "../../index";

/**
 * A component that renders the `snowplow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snowplow?s=sharp-solid snowplow}
 * @preview ![snowplow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/snowplow.svg)
 */
const Snowplow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0l0 160-64 0 0 138.8C26.2 316.8 0 355.3 0 400c0 61.9 50.1 112 112 112l256 0c61.9 0 112-50.1 112-112c0-17.2-3.9-33.5-10.8-48l42.8 0 0 64 0 13.3 9.4 9.4 64 64 45.3-45.3L576 402.7l0-50.7 0-64 0-52.8L633 164l-50-40-64 80-7 8.8 0 11.2 0 64-64 0 0-64L339.8 0 128 0zM64 400c0-26.5 21.5-48 48-48l256 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-256 0c-26.5 0-48-21.5-48-48zM380.2 224L256 224l-64-64 0-96 108.2 0 80 160zM120 424a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm264-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM280 424a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-56-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Snowplow;