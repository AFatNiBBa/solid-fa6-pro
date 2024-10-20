
import { Icon, generic } from "../../index";

/**
 * A component that renders the `handshake-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-simple?s=duotone handshake-simple}
 * @preview ![handshake-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/handshake-simple.svg)
 */
const HandshakeSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M208.3 186.4c-.1 .9-.2 1.9-.2 2.8c-.1 .9-.1 1.9-.1 2.8c0 9.7 2.9 19.4 8.9 27.9c15.4 21.6 45.4 26.6 67 11.2l57.2-40.8c4.4 4 8.8 8 13.1 12L496.4 332.6c5.5 5 9.5 11.1 12.1 17.5c.3 .6 .5 1.2 .7 1.8l82.7 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48l-16 0-65.5 0-71-47.3C423.2 69.8 404.1 64 384.5 64c-20.7 0-40.9 6.5-57.7 18.5c-3.1 2.2-6.2 4.4-9.3 6.7l-89.3 63.8c-.8 .6-1.6 1.2-2.4 1.8s-1.5 1.3-2.2 1.9c-1.4 1.3-2.8 2.7-4 4.2c-2.5 2.9-4.6 6.1-6.3 9.5s-3 6.9-3.8 10.5c-.4 1.8-.8 3.7-1 5.5z" />
        <path d="M48 352l108.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c7.4-8.1 11.5-18 12.4-28.2l7.8 7.1c19.5 17.9 49.9 16.6 67.8-2.9c12.9-14 15.8-33.7 9.2-50.3c-2.6-6.5-6.6-12.5-12.1-17.5L354.2 202.3l-13.1-12-57.2 40.8c-21.6 15.4-51.6 10.4-67-11.2s-10.4-51.6 11.2-67l89.3-63.8-2.7-2.3C297.5 72.1 275.5 64 252.8 64C234 64 215.7 69.6 200 80l-72 48-80 0c-26.5 0-48 21.5-48 48L0 304c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default HandshakeSimple;