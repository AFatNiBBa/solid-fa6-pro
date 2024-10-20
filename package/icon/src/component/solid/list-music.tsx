
import { Icon } from "../../index";

/**
 * A component that renders the `list-music` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-music?s=solid list-music}
 * @preview ![list-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/list-music.svg)
 */
const ListMusic: typeof Icon = x => (
    <Icon {...x}>
        <path d="M498.7 6c8.3 6 13.3 15.7 13.3 26l0 64c0 13.8-8.8 26-21.9 30.4L416 151.1 416 432c0 44.2-50.1 80-112 80s-112-35.8-112-80s50.1-80 112-80c17.2 0 33.5 2.8 48 7.7L352 128l0-64c0-13.8 8.8-26 21.9-30.4l96-32C479.6-1.6 490.4 0 498.7 6zM32 64l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64zm0 128l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 256c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default ListMusic;