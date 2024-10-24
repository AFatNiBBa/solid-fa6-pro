
import { Icon } from "../../index";

/**
 * A component that renders the `retweet` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/retweet?s=sharp-regular retweet}
 * @preview ![retweet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/retweet.svg)
 */
const Retweet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 208l48 0 24 0 0 184 0 24 24 0 200 0 24 0 0-48-24 0-176 0 0-160 24 0 48 0 0-48L129.9 97.9 96 64 62.1 97.9 0 160l0 48zm96-76.1L124.1 160l-56.2 0L96 131.9zM576 304l-48 0-24 0 0-184 0-24-24 0L280 96l-24 0 0 48 24 0 176 0 0 160-24 0-48 0 0 48 62.1 62.1L480 448l33.9-33.9L576 352l0-48zm-96 76.1L451.9 352l56.2 0L480 380.1z" />
    </Icon>
);

export default Retweet;