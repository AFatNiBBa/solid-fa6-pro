
import { Icon } from "../../index";

/**
 * A component that renders the `file-import` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-import?s=light file-import}
 * @preview ![file-import](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-import.svg)
 */
const FileImport: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 448c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-80-32 0 0 80c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-284.1c0-12.7-5.1-24.9-14.1-33.9L382.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 192 32 0 0-192c0-17.7 14.3-32 32-32l128 0 0 112c0 26.5 21.5 48 48 48l112 0 0 256zm-.5-288L368 160c-8.8 0-16-7.2-16-16l0-111.5c2.8 .7 5.4 2.1 7.4 4.2L475.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4zM283.3 212.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L329.4 304 16 304c-8.8 0-16 7.2-16 16s7.2 16 16 16l313.4 0-68.7 68.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l96-96c6.2-6.2 6.2-16.4 0-22.6l-96-96z" />
    </Icon>
);

export default FileImport;