
import { Icon } from "../../index";

/**
 * A component that renders the `kickstarter-k` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kickstarter-k?s=brands kickstarter-k}
 * @preview ![kickstarter-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/kickstarter-k.svg)
 */
const KickstarterK: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M356.6 256.2l40.8-40.5c42.2-41.9 42.2-110.3 0-152.1s-111-41.9-153.2 0L229.3 78.4C209.6 50.3 177.1 32 140.2 32C80.5 32 32 80.2 32 139.5V372.5C32 431.9 80.5 480 140.2 480c37.1 0 69.3-18.3 89-46.4l14.9 14.7c42.2 41.9 111 41.9 153.2 0s42.2-110.3 0-152.1l-40.8-40z" />
    </Icon>
);

export default KickstarterK;