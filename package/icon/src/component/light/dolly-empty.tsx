
import { Icon } from "../../index";

/**
 * A component that renders the `dolly-empty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly-empty?s=light dolly-empty}
 * @preview ![dolly-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/dolly-empty.svg)
 */
const DollyEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 16C8 7.2 15.2 0 24 0L88.9 0c20.7 0 39 13.2 45.5 32.8L241.3 353.3c4.8-.9 9.7-1.3 14.7-1.3c34.1 0 63.2 21.3 74.7 51.4L554.5 321c8.3-3.1 17.5 1.2 20.5 9.5s-1.2 17.5-9.5 20.5L335.9 435.6C334 478.1 299 512 256 512c-44.2 0-80-35.8-80-80c0-27.8 14.1-52.2 35.6-66.6L104.1 42.9C101.9 36.4 95.8 32 88.9 32L24 32C15.2 32 8 24.8 8 16zM304 432a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default DollyEmpty;