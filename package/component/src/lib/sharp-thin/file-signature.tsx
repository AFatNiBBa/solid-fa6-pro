
import { Icon } from "../../index";

/**
 * A component that renders the `file-signature` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-signature?s=sharp-thin file-signature}
 * @preview ![file-signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-signature.svg)
 */
const FileSignature: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M368 496L16 496 16 16l192 0 0 152 0 8 8 0 152 0 0 37.5 16-16 0-37.5L224 0 16 0 0 0 0 16 0 496l0 16 16 0 352 0 16 0 0-16 0-62.7-16 2.5 0 60.2zm-6.6-336L224 160l0-137.4L361.4 160zM120 312l-6.1 0-1.6 5.9L89.9 400 64 400l-8 0 0 16 8 0 32 0 6.1 0 1.6-5.9L126.1 328l3.8 0 22.4 82.1 1.6 5.9 6.1 0 8 0 4.6 0 2.3-4 29.7-52 14.7 0 29.7 52 2.3 4 4.6 0 24 0 8 0 .2-.2 16.4-2.6 74.7-11.6L564.7 216.3 576 204.9l-11.3-11.3-54.5-54.5-11.3-11.3L302.2 324.6l-11.6 74.7-.1 .7-2.5 0-8 0-19.4 0-29.7-52-2.3-4-4.6 0-24 0-4.6 0-2.3 4-27.8 48.7-21.5-78.8-1.6-5.9-6.1 0-16 0zm187.2 84.7l10-64.5L455 194.4l54.5 54.5L371.7 386.6l-64.5 10zM520.8 237.5L466.4 183l32.5-32.5 54.5 54.5-32.5 32.5z" />
    </Icon>
);

export default FileSignature;