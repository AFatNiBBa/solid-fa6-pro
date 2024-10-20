
import { Icon } from "../../index";

/**
 * A component that renders the `ello` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ello?s=brands ello}
 * @preview ![ello](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/ello.svg)
 */
const Ello: typeof Icon = x => (
    <Icon viewBox="0 0 496 512" {...x}>
        <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm143.84 285.2C375.31 358.51 315.79 404.8 248 404.8s-127.31-46.29-143.84-111.6c-1.65-7.44 2.48-15.71 9.92-17.36 7.44-1.65 15.71 2.48 17.36 9.92 14.05 52.91 62 90.11 116.56 90.11s102.51-37.2 116.56-90.11c1.65-7.44 9.92-12.4 17.36-9.92 7.44 1.65 12.4 9.92 9.92 17.36z" />
    </Icon>
);

export default Ello;