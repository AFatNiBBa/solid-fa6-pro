
import { Icon } from "../../index";

/**
 * A component that renders the `album-collection` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-collection?s=light album-collection}
 * @preview ![album-collection](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/album-collection.svg)
 */
const AlbumCollection: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 16c0 8.8 7.2 16 16 16l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L48 0C39.2 0 32 7.2 32 16zM16 80c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L32 64c-8.8 0-16 7.2-16 16zm43.8 48C26.9 128 1.1 156.3 4 189.1l24.7 272C31.4 489.9 55.6 512 84.5 512l342.9 0c29 0 53.1-22.1 55.8-50.9l24.7-272c3-32.8-22.8-61.1-55.8-61.1L59.8 128zM35.9 186.2C34.6 172.1 45.7 160 59.8 160l392.4 0c14.1 0 25.2 12.1 23.9 26.2l-24.7 272c-1.1 12.4-11.5 21.8-23.9 21.8L84.5 480c-12.4 0-22.8-9.5-23.9-21.8l-24.7-272zM256 416c-77.7 0-128-49.3-128-96s50.3-96 128-96s128 49.3 128 96s-50.3 96-128 96zm0 32c88.4 0 160-57.3 160-128s-71.6-128-160-128s-160 57.3-160 128s71.6 128 160 128zm0-104c13.3 0 24-9 24-20s-10.7-20-24-20s-24 9-24 20s10.7 20 24 20z" />
    </Icon>
);

export default AlbumCollection;