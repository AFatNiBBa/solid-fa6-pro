
import { Icon } from "../../index";

/**
 * A component that renders the `list-music` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-music?s=regular list-music}
 * @preview ![list-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/list-music.svg)
 */
const ListMusic: typeof Icon = x => (
    <Icon {...x}>
        <path d="M481.1 0C498.2 0 512 13.8 512 30.9L512 136c0 10.4-6.7 19.6-16.6 22.8L384 194.7 384 432c0 44.2-50.1 80-112 80s-112-35.8-112-80s50.1-80 112-80c23.8 0 45.9 5.3 64 14.3L336 64c0-10.3 6.6-19.5 16.4-22.8L471.4 1.6c3.1-1 6.4-1.6 9.8-1.6zM323.3 414.5c-11.2-8-29.2-14.5-51.3-14.5s-40.1 6.5-51.3 14.5C209.4 422.6 208 429.4 208 432s1.4 9.4 12.7 17.5c11.2 8 29.2 14.5 51.3 14.5s40.1-6.5 51.3-14.5c11.3-8.1 12.7-14.9 12.7-17.5s-1.4-9.4-12.7-17.5zM384 144.3l80-25.8 0-63.9L384 81.3l0 63zM24 48l240 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 96C10.7 96 0 85.3 0 72S10.7 48 24 48zm0 128l240 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 224c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 352c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default ListMusic;