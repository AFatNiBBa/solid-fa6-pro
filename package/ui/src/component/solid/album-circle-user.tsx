
import { Icon } from "../../index";

/**
 * A component that renders the `album-circle-user` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-circle-user?s=solid album-circle-user}
 * @preview ![album-circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/album-circle-user.svg)
 */
const AlbumCircleUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 96.7c-5.3-.5-10.6-.7-16-.7c-20.1 0-39.5 3.4-57.5 9.6C352.3 140 293.3 96 224 96C135.6 96 64 167.6 64 256s71.6 160 160 160c12.9 0 25.4-1.5 37.4-4.4c6.5 25.5 18.5 48.7 34.8 68.4L64 480c-35.3 0-64-28.7-64-64L0 96zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 144a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm221.7 80.7c-6.2-19-24-32.7-45.1-32.7l-65.2 0c-21 0-38.9 13.7-45.1 32.7C374.5 468.1 401.8 480 432 480s57.5-11.9 77.7-31.3zM480 336a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default AlbumCircleUser;