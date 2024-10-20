
import { Icon, generic } from "../../index";

/**
 * A component that renders the `album-circle-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-circle-user?s=duotone album-circle-user}
 * @preview ![album-circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/album-circle-user.svg)
 */
const AlbumCircleUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l232.2 0c-16.2-19.7-28.3-42.9-34.8-68.4c-12 2.9-24.5 4.4-37.4 4.4c-88.4 0-160-71.6-160-160s71.6-160 160-160c69.3 0 128.3 44 150.5 105.6c18-6.2 37.4-9.6 57.5-9.6c5.4 0 10.7 .2 16 .7L448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM192 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-32c-30.2 0-57.5-11.9-77.7-31.3c6.2-19 24-32.7 45.1-32.7l65.2 0c21 0 38.9 13.7 45.1 32.7C489.5 468.1 462.2 480 432 480zm0-192a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default AlbumCircleUser;