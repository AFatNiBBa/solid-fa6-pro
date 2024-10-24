
import { Icon } from "../../index";

/**
 * A component that renders the `hashtag` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag?s=thin hashtag}
 * @preview ![hashtag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/hashtag.svg)
 */
const Hashtag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M169.7 32.2c4.3 1 7 5.2 6.1 9.5L153.1 144l175.6 0L352.2 38.3c1-4.3 5.2-7 9.5-6.1s7 5.2 6.1 9.5L345.1 144l94.9 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-98.5 0L298.9 352 408 352c4.4 0 8 3.6 8 8s-3.6 8-8 8l-112.7 0L271.8 473.7c-1 4.3-5.2 7-9.5 6.1s-7-5.2-6.1-9.5L278.9 368l-175.6 0L79.8 473.7c-1 4.3-5.2 7-9.5 6.1s-7-5.2-6.1-9.5L86.9 368 8 368c-4.4 0-8-3.6-8-8s3.6-8 8-8l82.5 0 42.7-192L40 160c-4.4 0-8-3.6-8-8s3.6-8 8-8l96.7 0L160.2 38.3c1-4.3 5.2-7 9.5-6.1zM149.5 160L106.9 352l175.6 0 42.7-192-175.6 0z" />
    </Icon>
);

export default Hashtag;