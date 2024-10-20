
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-signature` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-signature?s=sharp-duotone-solid file-signature}
 * @preview ![file-signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-signature.svg)
 */
const FileSignature: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 88.9c-28 28-56.1 56.1-84.1 84.1l-7.3 51-4.6 0-8 0-22.1 0-11.6-23.2-4.4-8.8-9.9 0-32 0-9.9 0-4.4 8.8-3 5.9-15.4-51.4L163.9 304 152 304l-16 0-11.9 0-3.4 11.4L100.1 384 80 384l-16 0 0 32 16 0 32 0 11.9 0 3.4-11.4L144 349l16.7 55.6 3.4 11.4 11.9 0 8 0 9.9 0 4.4-8.8L209.9 384l12.2 0 11.6 23.2 4.4 8.8 9.9 0 32 0c2.6 0 5.3 0 8.1-.1c27.6-4 55.2-7.9 82.8-11.9L384 390.8 384 512 0 512 0 0z" />
        <path d="M384 160l-160 0L224 0 384 160zm121-32.2l71 71-41.3 41.3-71-71L505 127.8zm-63.9 63.9l71 71L370.9 404 288 415.9 299.9 333 441.1 191.8z" />
    </Icon>
);

export default FileSignature;