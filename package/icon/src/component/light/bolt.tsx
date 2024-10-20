
import { Icon } from "../../index";

/**
 * A component that renders the `bolt` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bolt?s=light bolt}
 * @preview ![bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bolt.svg)
 */
const Bolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M306.8 6.3C311.4 2.2 317.3 0 323.4 0c17.2 0 29.2 17.1 23.4 33.3L278.7 224 389 224c14.9 0 27 12.1 27 27c0 7.8-3.3 15.1-9.1 20.3L141.1 505.8c-4.5 4-10.4 6.2-16.5 6.2c-17.2 0-29.2-17.1-23.5-33.3L169.3 288 57.8 288C43.6 288 32 276.4 32 262.2c0-7.4 3.2-14.4 8.7-19.3L306.8 6.3zm.5 42.4L74.1 256 192 256c5.2 0 10.1 2.5 13.1 6.8s3.7 9.7 2 14.6L140.6 463.6 375.8 256 256 256c-5.2 0-10.1-2.5-13.1-6.8s-3.7-9.7-2-14.6l66.4-186z" />
    </Icon>
);

export default Bolt;