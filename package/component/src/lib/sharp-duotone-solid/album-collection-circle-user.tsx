
import { Icon, generic } from "../../index";

/**
 * A component that renders the `album-collection-circle-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-collection-circle-user?s=sharp-duotone-solid album-collection-circle-user}
 * @preview ![album-collection-circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/album-collection-circle-user.svg)
 */
const AlbumCollectionCircleUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160l512 0-3.7 32.4c-4.1-.3-8.2-.4-12.3-.4c-33.4 0-64.7 9.3-91.3 25.5c-26.2-6.1-54.8-9.5-84.7-9.5C193 208 90 268.9 90 344s103 136 230 136c13.2 0 26.1-.7 38.7-1.9C369 491 381.2 502.4 394.8 512L40 512 0 160zM16 80l24 0 432 0 24 0 0 48-24 0L40 128l-24 0 0-48zM32 0L56 0 456 0l24 0 0 48-24 0L56 48 32 48 32 0zM224 352c0-13.3 14.3-24 32-24s32 10.7 32 24s-14.3 24-32 24s-32-10.7-32-24z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-32c-31.7 0-60.3-13.2-80.7-34.3L440 416l112 0 24.7 29.7c-20.4 21.2-49 34.3-80.7 34.3zm0-192a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default AlbumCollectionCircleUser;