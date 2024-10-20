
import { Icon } from "../../index";

/**
 * A component that renders the `album-collection` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-collection?s=regular album-collection}
 * @preview ![album-collection](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/album-collection.svg)
 */
const AlbumCollection: typeof Icon = x => (
    <Icon {...x}>
        <path d="M56 0L456 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 48C42.7 48 32 37.3 32 24S42.7 0 56 0zM6.2 232.3C1.1 194 30.9 160 69.6 160l372.8 0c38.7 0 68.5 34 63.5 72.3l-29.5 224C472.2 488.2 445 512 412.9 512L99.1 512c-32.1 0-59.3-23.8-63.5-55.7L6.2 232.3zM69.6 208c-9.7 0-17.1 8.5-15.9 18.1l29.5 224c1 8 7.8 13.9 15.9 13.9l313.8 0c8 0 14.8-6 15.9-13.9l29.5-224c1.3-9.6-6.2-18.1-15.9-18.1L69.6 208zM400 336c0 57.4-64.5 104-144 104s-144-46.6-144-104s64.5-104 144-104s144 46.6 144 104zM16 104c0-13.3 10.7-24 24-24l432 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L40 128c-13.3 0-24-10.7-24-24zM256 368c17.7 0 32-10.7 32-24s-14.3-24-32-24s-32 10.7-32 24s14.3 24 32 24z" />
    </Icon>
);

export default AlbumCollection;