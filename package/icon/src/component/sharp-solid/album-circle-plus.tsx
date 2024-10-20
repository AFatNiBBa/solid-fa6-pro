
import { Icon } from "../../index";

/**
 * A component that renders the `album-circle-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-circle-plus?s=sharp-solid album-circle-plus}
 * @preview ![album-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/album-circle-plus.svg)
 */
const AlbumCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32l448 0 0 160.7c-5.3-.5-10.6-.7-16-.7c-20.1 0-39.5 3.4-57.5 9.6C352.3 140 293.3 96 224 96C135.6 96 64 167.6 64 256s71.6 160 160 160c12.9 0 25.4-1.5 37.4-4.4c6.5 25.5 18.5 48.7 34.8 68.4L0 480 0 32zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm208 0a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80l0-16-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48z" />
    </Icon>
);

export default AlbumCirclePlus;