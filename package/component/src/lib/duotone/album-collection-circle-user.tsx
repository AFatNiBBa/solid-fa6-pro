
import { Icon, generic } from "../../index";

/**
 * A component that renders the `album-collection-circle-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-collection-circle-user?s=duotone album-collection-circle-user}
 * @preview ![album-collection-circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/album-collection-circle-user.svg)
 */
const AlbumCollectionCircleUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M.4 214l32 256c3 24 23.4 42 47.6 42l314.8 0c-18.9-13.3-35.1-30.3-47.5-49.9c-26.9 11.4-58 17.9-91.3 17.9C154.4 480 72 419.1 72 344s82.4-136 184-136c45.4 0 86.9 12.1 119 32.2c31.5-29.9 74.2-48.2 121-48.2c4.5 0 9 .2 13.4 .5c-2-5.9-5.2-11.5-9.4-16.3c-9.1-10.3-22.2-16.2-36-16.2L48 160c-13.8 0-26.9 5.9-36 16.2S-1.3 200.3 .4 214zM16 104c0 13.3 10.7 24 24 24l432 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L40 80c-13.3 0-24 10.7-24 24zM32 24c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 0C42.7 0 32 10.7 32 24zM224 352c0 13.3 14.3 24 32 24s32-10.7 32-24s-14.3-24-32-24s-32 10.7-32 24z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-32c-30.2 0-57.5-11.9-77.7-31.3c6.2-19 24-32.7 45.1-32.7l65.2 0c21 0 38.9 13.7 45.1 32.7C553.5 468.1 526.2 480 496 480zm0-192a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default AlbumCollectionCircleUser;