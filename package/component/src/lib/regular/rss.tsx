
import { Icon } from "../../index";

/**
 * A component that renders the `rss` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rss?s=regular rss}
 * @preview ![rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/rss.svg)
 */
const Rss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 56C0 42.7 10.7 32 24 32c234.2 0 424 189.8 424 424c0 13.3-10.7 24-24 24s-24-10.7-24-24C400 248.3 231.7 80 24 80C10.7 80 0 69.3 0 56zM64 432a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM24 176c154.6 0 280 125.4 280 280c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1-103.9-232-232-232c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default Rss;