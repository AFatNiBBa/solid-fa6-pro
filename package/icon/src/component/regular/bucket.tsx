
import { Icon } from "../../index";

/**
 * A component that renders the `bucket` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bucket?s=regular bucket}
 * @preview ![bucket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bucket.svg)
 */
const Bucket: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 152l0 8-48 0 0-8C48 68.1 116.1 0 200 0l48 0c83.9 0 152 68.1 152 152l0 8-48 0 0-8c0-57.4-46.6-104-104-104l-48 0C142.6 48 96 94.6 96 152zM0 216c0-13.3 10.7-24 24-24l48.4 0 303.3 0 48.4 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-6 0L389.3 470c-3 24-23.4 42-47.6 42l-235.3 0c-24.2 0-44.6-18-47.6-42L30 240l-6 0c-13.3 0-24-10.7-24-24zm78.4 24l28 224 235.3 0 28-224L78.4 240z" />
    </Icon>
);

export default Bucket;