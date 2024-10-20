
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-music` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-music?s=duotone user-music}
 * @preview ![user-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-music.svg)
 */
const UserMusic: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 482.3C0 383.8 79.8 304 178.3 304l91.4 0c36.3 0 70.1 10.9 98.3 29.5l0 51.6c-18 2.5-34.8 9.1-48.5 19.4c-17.6 13.2-31.5 34-31.5 59.5c0 19.1 7.7 35.4 18.9 48L29.7 512C13.3 512 0 498.7 0 482.3zM352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0z" />
        <path d="M640 184c0-7.7-3.7-15-10-19.5s-14.3-5.7-21.6-3.3l-192 64c-9.8 3.3-16.4 12.4-16.4 22.8l0 48 0 121.5c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48l0-150.7 144-48 0 88.2c-5.1-1-10.5-1.5-16-1.5c-35.3 0-64 21.5-64 48s28.7 48 64 48s64-21.5 64-48c0-1.5-.1-3-.3-4.4c.2-1.2 .3-2.4 .3-3.6l0-160 0-48z" />
    </Icon>
);

export default UserMusic;