
import { Icon } from "../../index";

/**
 * A component that renders the `user-music` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-music?s=sharp-solid user-music}
 * @preview ![user-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-music.svg)
 */
const UserMusic: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zm64 463.8c0 19.1 7.8 35.6 19.1 48.2L0 512 64 304l304 0 0 80.9c-18 2.5-34.8 9.1-48.5 19.4c-17.6 13.2-31.5 34-31.5 59.5zM640 152l0 33.3 0 48 0 160c0 1.2-.1 2.4-.3 3.6c.2 1.5 .3 2.9 .3 4.4c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .5 16 1.5l0-88.2-144 48 0 150.7c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48c5.5 0 10.9 .5 16 1.5l0-121.5 0-48 0-17.3 16.4-5.5 192-64L640 152z" />
    </Icon>
);

export default UserMusic;