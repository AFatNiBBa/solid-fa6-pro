
import { Icon } from "../../index";

/**
 * A component that renders the `dolly-empty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly-empty?s=regular dolly-empty}
 * @preview ![dolly-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dolly-empty.svg)
 */
const DollyEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 24C0 10.7 10.7 0 24 0l80.8 0C129 0 150.5 15.6 158 38.6L250 320.2c2-.1 4-.2 6-.2c33.2 0 62.5 16.9 79.8 42.5L544 289.4c12.5-4.4 26.2 2.2 30.6 14.7s-2.2 26.2-14.7 30.6L351.7 407.8c.2 2.7 .3 5.4 .3 8.2c0 53-43 96-96 96s-96-43-96-96c0-34 17.7-63.9 44.3-80.9L112.4 53.5c-1.1-3.3-4.1-5.5-7.6-5.5L24 48C10.7 48 0 37.3 0 24zM304 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default DollyEmpty;