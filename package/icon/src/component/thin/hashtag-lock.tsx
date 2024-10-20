
import { Icon } from "../../index";

/**
 * A component that renders the `hashtag-lock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hashtag-lock?s=thin hashtag-lock}
 * @preview ![hashtag-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/hashtag-lock.svg)
 */
const HashtagLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M169.7 32.2c4.3 1 7 5.2 6.1 9.5L153.1 144l175.6 0L352.2 38.3c1-4.3 5.2-7 9.5-6.1s7 5.2 6.1 9.5L345.1 144l94.9 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-98.5 0L298.9 352l21.1 0s0 0 0 0l0 16-24.7 0L271.8 473.7c-1 4.3-5.2 7-9.5 6.1s-7-5.2-6.1-9.5L278.9 368l-175.6 0L79.8 473.7c-1 4.3-5.2 7-9.5 6.1s-7-5.2-6.1-9.5L86.9 368 8 368c-4.4 0-8-3.6-8-8s3.6-8 8-8l82.5 0 42.7-192L40 160c-4.4 0-8-3.6-8-8s3.6-8 8-8l96.7 0L160.2 38.3c1-4.3 5.2-7 9.5-6.1zM149.5 160L106.9 352l175.6 0 42.7-192-175.6 0zM464 208c-26.5 0-48 21.5-48 48l0 64 96 0 0-64c0-26.5-21.5-48-48-48zm-64 48c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 16 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l16 0 0-64zm-16 80c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16l0-128c0-8.8-7.2-16-16-16l-16 0-16 0-96 0-16 0-16 0z" />
    </Icon>
);

export default HashtagLock;