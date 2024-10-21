
import { Icon } from "../../index";

/**
 * A component that renders the `mercury` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mercury?s=thin mercury}
 * @preview ![mercury](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mercury.svg)
 */
const Mercury: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M83.5 2.4C80.4-.8 75.3-.8 72.1 2.3S68.9 10.4 72 13.6c18.7 19.1 42 33.7 68 42.2C68.2 78 16 144.9 16 224c0 94.5 74.5 171.6 168 175.8l0 48.2-56 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 56 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0 0-48.2c93.5-4.2 168-81.3 168-175.8c0-79.1-52.2-146-124-168.2c26-8.5 49.3-23.1 68-42.2c3.1-3.2 3-8.2-.1-11.3s-8.2-3-11.3 .1C273 30.5 234.5 48 192 48S111 30.5 83.5 2.4zM192 64a160 160 0 1 1 0 320 160 160 0 1 1 0-320z" />
    </Icon>
);

export default Mercury;