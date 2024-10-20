
import { Icon } from "../../index";

/**
 * A component that renders the `square-rss` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-rss?s=thin square-rss}
 * @preview ![square-rss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-rss.svg)
 */
const SquareRss: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm48 304a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM72 96c-4.4 0-8 3.6-8 8s3.6 8 8 8c163.5 0 296 132.5 296 296c0 4.4 3.6 8 8 8s8-3.6 8-8C384 235.7 244.3 96 72 96zm0 96c-4.4 0-8 3.6-8 8s3.6 8 8 8c110.5 0 200 89.5 200 200c0 4.4 3.6 8 8 8s8-3.6 8-8c0-119.3-96.7-216-216-216z" />
    </Icon>
);

export default SquareRss;