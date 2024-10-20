
import { Icon } from "../../index";

/**
 * A component that renders the `folder-arrow-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-arrow-up?s=thin folder-arrow-up}
 * @preview ![folder-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/folder-arrow-up.svg)
 */
const FolderArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 416c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l133.5 0c12.7 0 24.9 5.1 33.9 14.1l35.9 35.9c9 9 21.2 14.1 33.9 14.1L448 112c26.5 0 48 21.5 48 48l0 256zM64 480l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L301.3 96c-8.5 0-16.6-3.4-22.6-9.4L242.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64zm200-88l0-188.7 74.3 74.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-88-88c-3.1-3.1-8.2-3.1-11.3 0l-88 88c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L248 203.3 248 392c0 4.4 3.6 8 8 8s8-3.6 8-8z" />
    </Icon>
);

export default FolderArrowUp;