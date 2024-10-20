
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-music` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-music?s=duotone list-music}
 * @preview ![list-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/list-music.svg)
 */
const ListMusic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96C0 78.3 14.3 64 32 64l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 224c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 256c-17.7 0-32-14.3-32-32zM0 352c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32z" />
        <path d="M512 32c0-10.3-4.9-19.9-13.3-26s-19.1-7.7-28.8-4.4l-96 32C360.8 38 352 50.2 352 64l0 64 0 231.7c-14.5-4.9-30.8-7.7-48-7.7c-61.9 0-112 35.8-112 80s50.1 80 112 80s112-35.8 112-80l0-280.9 74.1-24.7C503.2 122 512 109.8 512 96l0-64z" />
    </Icon>
);

export default ListMusic;