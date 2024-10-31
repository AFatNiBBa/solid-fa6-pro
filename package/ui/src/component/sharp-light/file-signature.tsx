
import { Icon } from "../../index";

/**
 * A component that renders the `file-signature` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-signature?s=sharp-light file-signature}
 * @preview ![file-signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-signature.svg)
 */
const FileSignature: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 192l0 28.9 32-32 0-36.9L232 0 32 0 0 0 0 32 0 480l0 32 32 0 320 0 32 0 0-32 0-45.3-32 5 0 40.3L32 480 32 32l160 0 0 144 0 16 16 0 144 0zm-5.3-32L224 160l0-122.7L346.7 160zM136 304l-11.9 0-3.4 11.4L100.1 384 80 384l-16 0 0 32 16 0 32 0 11.9 0 3.4-11.4L144 349l16.7 55.6 3.4 11.4 11.9 0 8 0 9.9 0 4.4-8.8L209.9 384l4.2 0 11.6 23.2 4.4 8.8 9.9 0 16 0 16 0 16 0s0 0 0 0l33.2-5.2L390.7 400 553.4 237.3 576 214.7l-22.6-22.6L489.3 128 304 313.3l-10.8 69.5L293 384l-5 0-16 0-16 0-6.1 0-11.6-23.2-4.4-8.8-9.9 0-24 0-9.9 0-4.4 8.8-3 5.9-15.4-51.4L163.9 304 152 304l-16 0zM466.5 196l22.8-22.8 41.5 41.5L508 237.5 466.5 196zm-22.6 22.6l41.5 41.5L375.5 370l-49.1 7.7 7.7-49.1L443.9 218.6z" />
    </Icon>
);

export default FileSignature;