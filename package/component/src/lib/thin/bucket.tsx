
import { Icon } from "../../index";

/**
 * A component that renders the `bucket` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bucket?s=thin bucket}
 * @preview ![bucket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bucket.svg)
 */
const Bucket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 136l0 24c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-24C64 60.9 124.9 0 200 0l48 0c75.1 0 136 60.9 136 136l0 16c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-16c0-66.3-53.7-120-120-120l-48 0C133.7 16 80 69.7 80 136zM0 200c0-4.4 3.6-8 8-8l16 0 16.1 0 367.8 0 16.1 0 16 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-18 0L389.3 470c-3 24-23.4 42-47.6 42l-235.3 0c-24.2 0-44.6-18-47.6-42L26 208 8 208c-4.4 0-8-3.6-8-8zm42.1 8L74.6 468c2 16 15.6 28 31.8 28l235.3 0c16.1 0 29.8-12 31.8-28l32.5-260L42.1 208z" />
    </Icon>
);

export default Bucket;