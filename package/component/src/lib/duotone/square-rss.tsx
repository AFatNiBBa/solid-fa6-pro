
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-rss` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-rss?s=duotone square-rss}
 * @preview ![square-rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-rss.svg)
 */
const SquareRss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm96 40c0 13.3 10.7 24 24 24c110.5 0 200 89.5 200 200c0 13.3 10.7 24 24 24s24-10.7 24-24c0-137-111-248-248-248c-13.3 0-24 10.7-24 24zm0 96c0 13.3 10.7 24 24 24c57.4 0 104 46.6 104 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-83.9-68.1-152-152-152c-13.3 0-24 10.7-24 24zm0 120a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M120 112c-13.3 0-24 10.7-24 24s10.7 24 24 24c110.5 0 200 89.5 200 200c0 13.3 10.7 24 24 24s24-10.7 24-24c0-137-111-248-248-248zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24c57.4 0 104 46.6 104 104c0 13.3 10.7 24 24 24s24-10.7 24-24c0-83.9-68.1-152-152-152zm8 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default SquareRss;