
import { Icon } from "../../index";

/**
 * A component that renders the `album-collection` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-collection?s=sharp-solid album-collection}
 * @preview ![album-collection](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/album-collection.svg)
 */
const AlbumCollection: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0L56 0 456 0l24 0 0 48-24 0L56 48 32 48 32 0zm8 512L0 160l512 0L472 512 40 512zM440 344c0-75.1-82.4-136-184-136S72 268.9 72 344s82.4 136 184 136s184-60.9 184-136zM256 376c-17.7 0-32-10.7-32-24s14.3-24 32-24s32 10.7 32 24s-14.3 24-32 24zM40 80l432 0 24 0 0 48-24 0L40 128l-24 0 0-48 24 0z" />
    </Icon>
);

export default AlbumCollection;