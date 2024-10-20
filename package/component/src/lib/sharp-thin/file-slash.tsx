
import { Icon } from "../../index";

/**
 * A component that renders the `file-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-slash?s=sharp-thin file-slash}
 * @preview ![file-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-slash.svg)
 */
const FileSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 160L352 0 144 0 128 0l0 12.7 16 12.6 0-9.3 192 0 0 152 0 8 8 0 152 0 0 127.2 16 12.6L512 160zM144 496l0-287.2-16-12.6L128 496l0 16 16 0 352 0 16 0 0-12.7-16-12.6 0 9.3-352 0zM489.4 160L352 160l0-137.4L489.4 160zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default FileSlash;