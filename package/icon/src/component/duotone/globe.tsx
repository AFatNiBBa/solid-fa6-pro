
import { Icon, generic } from "../../index";

/**
 * A component that renders the `globe` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe?s=duotone globe}
 * @preview ![globe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/globe.svg)
 */
const Globe: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0-22.1 2.8-43.5 8.1-64c41 0 82.1 0 123.1 0c-1 10.3-1.8 20.8-2.4 31.6c-.1 2.6-.2 5.3-.4 8.1c-.1 2.5-.2 5-.2 7.5l0 .6c-.1 2.6-.1 5.1-.1 7.5l0 .4c0 2.6 0 5.2-.1 7.7l0 .4c0 8.2 .2 16.4 .5 24.5c.1 2.6 .2 5.3 .3 7.9c.5 10.7 1.3 21.3 2.4 31.6L8.1 320C2.8 299.5 0 278.1 0 256zm18.6-96C48.5 86.3 111.6 29.6 189.5 8.7c-25 34.6-44.3 88-54.2 151.3c-38.9 0-77.8 0-116.6 0zm0 192l116.6 0c9.9 63.3 29.2 116.7 54.2 151.3C111.6 482.4 48.5 425.7 18.6 352zM160.5 231.4c.1-2.7 .2-5.4 .4-8.1c.6-10.7 1.4-21.1 2.5-31.4c61.8 0 123.6 0 185.3 0c2.2 20.4 3.3 41.9 3.3 64c0 22.1-1.2 43.5-3.3 64c-61.8 0-123.6 0-185.3 0c-1.1-10.2-1.9-20.7-2.5-31.4c-.3-5.4-.5-10.9-.6-16.4c-.1-2.7-.1-5.3-.2-8c0-2.6-.1-5.2-.1-7.8l0-.4c0-.1 0-.3 0-.4c0-2.8 0-5.5 .1-8.2c0-2.5 .1-5.1 .2-7.6l0-.6c.1-2.5 .2-5.1 .3-7.7zm7.2-71.4c6.1-36.7 15.5-69.2 27.1-95.5c10.5-23.8 22.2-41.2 33.6-52.1c6.8-6.5 12.8-10.2 18.1-12.2c3.2-.1 6.3-.2 9.5-.2s6.3 .1 9.5 .2c5.3 1.9 11.4 5.7 18.1 12.2c11.4 10.9 23.1 28.3 33.6 52.1c11.6 26.3 21 58.8 27.1 95.5c-58.9 0-117.8 0-176.7 0zm0 192l176.7 0c-6.1 36.7-15.5 69.2-27.1 95.5c-10.5 23.8-22.2 41.2-33.6 52.1c-6.8 6.5-12.8 10.2-18.1 12.2c-3.2 .1-6.3 .2-9.5 .2s-6.3-.1-9.5-.2c-5.3-1.9-11.4-5.7-18.1-12.2c-11.4-10.9-23.1-28.3-33.6-52.1c-11.6-26.3-21-58.8-27.1-95.5zM322.5 8.7c77.8 20.9 141 77.5 170.9 151.3c-38.9 0-77.8 0-116.6 0C366.9 96.7 347.5 43.3 322.5 8.7zm0 494.6c25-34.6 44.3-88 54.2-151.3l116.6 0c-29.8 73.7-93 130.4-170.9 151.3zM380.8 192c41 0 82.1 0 123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64c0-22-1.1-43.4-3.2-64z" />
        <path d="M344.3 352c-6.1 36.7-15.5 69.2-27.1 95.5c-10.5 23.8-22.2 41.2-33.6 52.1c-6.8 6.5-12.8 10.2-18.1 12.2c19.7-.7 38.7-3.6 57-8.6c25-34.6 44.3-88 54.2-151.3l116.6 0c4.2-10.3 7.7-21 10.5-32l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64l123.1 0c-2.8-11-6.4-21.7-10.5-32l-116.6 0C366.9 96.7 347.5 43.3 322.5 8.7c-18.3-4.9-37.4-7.8-57-8.6c5.3 1.9 11.4 5.7 18.1 12.2c11.4 10.9 23.1 28.3 33.6 52.1c11.6 26.3 21 58.8 27.1 95.5l-176.7 0c6.1-36.7 15.5-69.2 27.1-95.5c10.5-23.8 22.2-41.2 33.6-52.1c6.8-6.5 12.8-10.2 18.1-12.2c-19.7 .7-38.7 3.6-57 8.6c-25 34.6-44.4 88-54.2 151.3L18.6 160c-4.2 10.3-7.7 21-10.5 32l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320c2.8 11 6.4 21.7 10.5 32l116.6 0c9.9 63.3 29.2 116.7 54.2 151.3c18.3 4.9 37.4 7.8 57 8.6c-5.3-1.9-11.4-5.7-18.1-12.2c-11.4-10.9-23.1-28.3-33.6-52.1c-11.6-26.3-21-58.8-27.1-95.5l176.7 0zm7.7-96c0 22.1-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.9-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.9 3.3 64z" />
    </Icon>
);

export default Globe;