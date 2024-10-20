
import { Icon } from "../../index";

/**
 * A component that renders the `mitten` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mitten?s=sharp-regular mitten}
 * @preview ![mitten](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mitten.svg)
 */
const Mitten: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 135.6C0 60.7 60.7 0 135.6 0c58.4 0 110.2 37.3 128.6 92.7L297 191.2l21.2-23.3 16.4-18 17.8 16.7 76.8 72 15.2 14.3-12.1 17.1L352 383.6l0 .4-48 0 0-8 0-7.6 4.4-6.2 72.7-102.9-43.8-41L305 253.8l-27.6 30.3-13-38.9L218.7 107.9C206.7 72.1 173.3 48 135.6 48C87.2 48 48 87.2 48 135.6l0 9.5c0 7.9 1 15.8 2.9 23.5l52.4 209.5 .7 2.9 0 3-48.7 0L4.3 180.3C1.5 168.8 0 157 0 145.1l0-9.5zM384 416l0 96L32 512l0-96 352 0z" />
    </Icon>
);

export default Mitten;