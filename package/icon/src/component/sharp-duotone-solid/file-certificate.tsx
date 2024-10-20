
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-certificate` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-certificate?s=sharp-duotone-solid file-certificate}
 * @preview ![file-certificate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-certificate.svg)
 */
const FileCertificate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 0L352 0l0 160 160 0 0 352-320 0c0-21.3 0-42.7 0-64l0-57.8 27.6-3.8 6-.8 .8-6 4.4-32.2 25.7-19.9 4.8-3.7-2.3-5.6L246.7 288 259 257.9l2.3-5.6-4.8-3.7-25.7-19.9-4.4-32.2-.8-6-6-.8-32.2-4.4-19.9-25.7-3.7-4.8-5.6 2.3c-10 4.1-20.1 8.2-30.1 12.3c0-56.4 0-112.9 0-169.3z" />
        <path d="M512 160l-160 0L352 0 512 160zM92.3 154.6l5.6 2.3L128 169.3 158.1 157l5.6-2.3 3.7 4.8 19.9 25.7 32.2 4.4 6 .8 .8 6 4.4 32.2 25.7 19.9 4.8 3.7-2.3 5.6L246.7 288 259 318.1l2.3 5.6-4.8 3.7-25.7 19.9-4.4 32.2-.8 6-6 .8L192 390.2 192 512l-64-40L64 512l0-121.8-27.6-3.8-6-.8-.8-6-4.4-32.2L-.5 327.4l-4.8-3.7 2.3-5.6L9.3 288-3 257.9l-2.3-5.6 4.8-3.7 25.7-19.9 4.4-32.2 .8-6 6-.8 32.2-4.4 19.9-25.7 3.7-4.8zM192 288A64 64 0 1 0 64 288a64 64 0 1 0 128 0z" />
    </Icon>
);

export default FileCertificate;