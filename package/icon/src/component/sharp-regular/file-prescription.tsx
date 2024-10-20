
import { Icon } from "../../index";

/**
 * A component that renders the `file-prescription` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-prescription?s=sharp-regular file-prescription}
 * @preview ![file-prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-prescription.svg)
 */
const FilePrescription: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l176 0 0 112 112 0 0 304L48 464 48 48zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM104 192l-24 0 0 24 0 80 0 64 0 24 48 0 0-24 0-40 24 0-1 1 55 55-23 23-17 17L200 449.9l17-17 23-23 23 23 17 17L313.9 416l-17-17-23-23 23-23 17-17L280 302.1l-17 17-23 23-31.1-31.1C227.5 299.7 240 279.3 240 256c0-35.3-28.7-64-64-64l-72 0zm72 80l-48 0 0-32 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16z" />
    </Icon>
);

export default FilePrescription;