
import { Icon, generic } from "../../index";

/**
 * A component that renders the `album-collection` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-collection?s=duotone album-collection}
 * @preview ![album-collection](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/album-collection.svg)
 */
const AlbumCollection: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.4 214l32 256c3 24 23.4 42 47.6 42l352 0c24.2 0 44.6-18 47.6-42l32-256c.2-2 .4-4 .4-6c0-11.6-4.2-22.9-12-31.8c-9.1-10.3-22.2-16.2-36-16.2L48 160c-13.8 0-26.9 5.9-36 16.2S-1.3 200.3 .4 214zM72 344c0-75.1 82.4-136 184-136s184 60.9 184 136s-82.4 136-184 136S72 419.1 72 344z" />
        <path d="M32 24c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 0C42.7 0 32 10.7 32 24zM256 480c101.6 0 184-60.9 184-136s-82.4-136-184-136S72 268.9 72 344s82.4 136 184 136zm0-104c-17.7 0-32-10.7-32-24s14.3-24 32-24s32 10.7 32 24s-14.3 24-32 24zM40 80c-13.3 0-24 10.7-24 24s10.7 24 24 24l432 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L40 80z" />
    </Icon>
);

export default AlbumCollection;