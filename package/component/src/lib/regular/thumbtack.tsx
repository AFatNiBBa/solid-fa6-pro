
import { Icon } from "../../index";

/**
 * A component that renders the `thumbtack` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbtack?s=regular thumbtack}
 * @preview ![thumbtack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/thumbtack.svg)
 */
const Thumbtack: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M134.6 51.7L123.8 192.6c-1.1 14.6-8.8 27.8-20.9 36C79 244.8 61.1 269.4 53.8 298.9L52.5 304 168 304l0-88c0-13.3 10.7-24 24-24s24 10.7 24 24l0 88 115.5 0-1.3-5.1c-7.4-29.5-25.2-54.1-49.1-70.2c-12.1-8.2-19.8-21.5-20.9-36L249.4 51.7c-.1-1.2-.1-2.5-.1-3.7L134.8 48c0 1.2 0 2.5-.1 3.7zM168 352L32 352c-9.9 0-19.2-4.5-25.2-12.3S-1.4 321.8 1 312.2l6.2-25c10.3-41.3 35.4-75.7 68.7-98.3L83.1 96l3.7-48L56 48c-4.4 0-8.6-1.2-12.2-3.3C36.8 40.5 32 32.8 32 24C32 10.7 42.7 0 56 0L86.8 0 297.2 0 328 0c13.3 0 24 10.7 24 24c0 8.8-4.8 16.5-11.8 20.7c-3.6 2.1-7.7 3.3-12.2 3.3l-30.8 0 3.7 48 7.1 92.9c33.3 22.6 58.4 57.1 68.7 98.3l6.2 25c2.4 9.6 .2 19.7-5.8 27.5s-15.4 12.3-25.2 12.3l-136 0 0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136z" />
    </Icon>
);

export default Thumbtack;