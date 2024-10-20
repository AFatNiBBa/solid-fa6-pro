
import { Icon } from "../../index";

/**
 * A component that renders the `thumbtack` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbtack?s=light thumbtack}
 * @preview ![thumbtack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/thumbtack.svg)
 */
const Thumbtack: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M119.9 34.5L107.8 191.4c-.7 9.7-5.9 18.6-13.9 24c-27 18.3-47.3 46.2-55.6 79.6L32 320l144 0 0-96c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96 144 0-6.2-25c-8.3-33.4-28.6-61.3-55.6-79.6c-8.1-5.5-13.2-14.3-13.9-24L264.1 34.5c-.1-.8-.1-1.6-.1-2.5L120 32c0 .8 0 1.6-.1 2.5zM176 352L32 352c-9.9 0-19.2-4.5-25.2-12.3S-1.4 321.8 1 312.2l6.2-25c10.3-41.3 35.4-75.7 68.7-98.3L85.5 64 88 32 64 32c-2.9 0-5.6-.8-7.9-2.1C51.2 27.1 48 21.9 48 16C48 7.2 55.2 0 64 0L88 0 296 0l24 0c8.8 0 16 7.2 16 16c0 5.9-3.2 11.1-8.1 13.9c-2.3 1.3-5 2.1-7.9 2.1l-24 0 2.5 32 9.6 124.9c33.3 22.6 58.4 57.1 68.7 98.3l6.2 25c2.4 9.6 .2 19.7-5.8 27.5s-15.4 12.3-25.2 12.3l-144 0 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144z" />
    </Icon>
);

export default Thumbtack;