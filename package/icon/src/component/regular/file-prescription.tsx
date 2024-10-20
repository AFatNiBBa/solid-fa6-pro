
import { Icon } from "../../index";

/**
 * A component that renders the `file-prescription` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-prescription?s=regular file-prescription}
 * @preview ![file-prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-prescription.svg)
 */
const FilePrescription: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 448L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm40 192c-13.3 0-24 10.7-24 24l0 80 0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 22.1 0c.3 .3 .6 .7 .9 1l55 55-23 23c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-23-23 23-23c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23-31.1-31.1C227.5 299.7 240 279.3 240 256c0-35.3-28.7-64-64-64l-72 0zm72 80l-48 0 0-32 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
    </Icon>
);

export default FilePrescription;