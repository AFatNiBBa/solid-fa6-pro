
import { Icon } from "../../index";

/**
 * A component that renders the `folder-magnifying-glass` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-magnifying-glass?s=thin folder-magnifying-glass}
 * @preview ![folder-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/folder-magnifying-glass.svg)
 */
const FolderMagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 464L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l133.5 0c12.7 0 24.9 5.1 33.9 14.1l35.9 35.9c9 9 21.2 14.1 33.9 14.1L448 112c26.5 0 48 21.5 48 48l0 256c0 26.5-21.5 48-48 48zM64 480l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L301.3 96c-8.5 0-16.6-3.4-22.6-9.4L242.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64zM240 192a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 176c23.6 0 45.3-8.5 62-22.7l52.4 52.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L313.3 334c14.2-16.7 22.7-38.4 22.7-62c0-53-43-96-96-96s-96 43-96 96s43 96 96 96z" />
    </Icon>
);

export default FolderMagnifyingGlass;