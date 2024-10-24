
import { Icon } from "../../index";

/**
 * A component that renders the `list-music` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-music?s=light list-music}
 * @preview ![list-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/list-music.svg)
 */
const ListMusic: typeof Icon = x => (
    <Icon {...x}>
        <path d="M489.1 0C501.8 0 512 10.2 512 22.9L512 136c0 6.9-4.5 13.1-11.1 15.2L384 188.9 384 432c0 44.2-50.1 80-112 80s-112-35.8-112-80s50.1-80 112-80c31.3 0 59.7 9.2 80 24l0-320c0-6.9 4.4-13 10.9-15.2L481.9 1.2c2.3-.8 4.8-1.2 7.2-1.2zM332.6 401.5C318.3 391.3 297 384 272 384s-46.3 7.3-60.6 17.5C197.1 411.7 192 422.9 192 432s5.1 20.3 19.4 30.5C225.7 472.7 247 480 272 480s46.3-7.3 60.6-17.5C346.9 452.3 352 441.1 352 432s-5.1-20.3-19.4-30.5zM384 155.3l96-30.9 0-88.8-96 32 0 87.8zM16 64l256 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 96C7.2 96 0 88.8 0 80s7.2-16 16-16zm0 128l256 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 224c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 128l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 352c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default ListMusic;