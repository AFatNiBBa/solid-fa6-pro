
import { Icon } from "../../index";

/**
 * A component that renders the `album-circle-plus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-circle-plus?s=sharp-regular album-circle-plus}
 * @preview ![album-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/album-circle-plus.svg)
 */
const AlbumCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 80l352 0 0 114.9c10.4-1.9 21.1-2.9 32-2.9c5.4 0 10.7 .2 16 .7L448 80l0-48-48 0L48 32 0 32 0 80 0 432l0 48 48 0 248.2 0c-11.8-14.3-21.4-30.5-28.2-48L48 432 48 80zm176 32c-79.5 0-144 64.5-144 144s64.5 144 144 144c11.8 0 23.2-1.4 34.2-4.1c-1.4-9.1-2.2-18.4-2.2-27.9c0-71.4 42.5-132.9 103.6-160.5C339.7 151.8 286.5 112 224 112zM192 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 48 0 16 0 0 32-16 0-48 0 0 48 0 16-32 0 0-16 0-48-48 0-16 0 0-32 16 0 48 0 0-48 0-16 32 0 0 16z" />
    </Icon>
);

export default AlbumCirclePlus;