
import { Icon } from "../../index";

/**
 * A component that renders the `file-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-slash?s=sharp-light file-slash}
 * @preview ![file-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-slash.svg)
 */
const FileSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 326l-32-25.3L480 192l-128 0-9.8 0L320 192l0-17.5 0-14.5 0-128L160 32l0 16.1L128 22.9 128 0l32 0L360 0 512 152l0 174zM352 160l122.7 0L352 37.3 352 160zM160 211.2L160 480l320 0 0-16.1 32 25.3 0 22.9-32 0-320 0-32 0 0-32 0-294 32 25.3zM19.9 .1L32.4 10 627.5 477.1l12.6 9.9-19.8 25.2-12.6-9.9L12.7 35.2 .1 25.3 19.9 .1z" />
    </Icon>
);

export default FileSlash;