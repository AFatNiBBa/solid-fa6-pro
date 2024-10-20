
import { Icon } from "../../index";

/**
 * A component that renders the `rss` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rss?s=thin rss}
 * @preview ![rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/rss.svg)
 */
const Rss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8c234.2 0 424 189.8 424 424c0 4.4 3.6 8 8 8s8-3.6 8-8C448 229 251 32 8 32zM8 176c-4.4 0-8 3.6-8 8s3.6 8 8 8c154.6 0 280 125.4 280 280c0 4.4 3.6 8 8 8s8-3.6 8-8C304 308.5 171.5 176 8 176zm8 240a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 0 416a64 64 0 1 0 128 0z" />
    </Icon>
);

export default Rss;