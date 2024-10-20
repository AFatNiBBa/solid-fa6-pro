
import { Icon } from "../../index";

/**
 * A component that renders the `square-rss` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-rss?s=sharp-thin square-rss}
 * @preview ![square-rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-rss.svg)
 */
const SquareRss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 416L16 464 16 48l416 0zM16 32L0 32 0 48 0 464l0 16 16 0 416 0 16 0 0-16 0-416 0-16-16 0L16 32zm96 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM64 112c167.9 0 304 136.1 304 304l16 0C384 239.3 240.7 96 64 96l0 16zM288 416c0-123.7-100.3-224-224-224l0 16c114.9 0 208 93.1 208 208l16 0z" />
    </Icon>
);

export default SquareRss;