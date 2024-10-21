
import { Icon } from "../../index";

/**
 * A component that renders the `album-circle-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-circle-user?s=sharp-solid album-circle-user}
 * @preview ![album-circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/album-circle-user.svg)
 */
const AlbumCircleUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32l448 0 0 160.7c-5.3-.5-10.6-.7-16-.7c-20.1 0-39.5 3.4-57.5 9.6C352.3 140 293.3 96 224 96C135.6 96 64 167.6 64 256s71.6 160 160 160c12.9 0 25.4-1.5 37.4-4.4c6.5 25.5 18.5 48.7 34.8 68.4L0 480 0 32zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 144a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm224.7 77.7L488 416l-112 0-24.7 29.7c20.4 21.2 49 34.3 80.7 34.3s60.3-13.2 80.7-34.3zM480 336a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default AlbumCircleUser;