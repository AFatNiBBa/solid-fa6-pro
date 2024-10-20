
import { Icon } from "../../index";

/**
 * A component that renders the `file-pdf` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pdf?s=sharp-thin file-pdf}
 * @preview ![file-pdf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-pdf.svg)
 */
const FilePdf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 496l96 0 0 16-96 0L0 512l0-16L0 16 0 0 16 0 224 0 384 160l0 144-16 0 0-128-152 0-8 0 0-8 0-152L16 16l0 480zM361.4 160L224 22.6 224 160l137.4 0zM176 368l32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-24 0 0 48-16 0 0-56 0-80 0-8 8 0zm32 80c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0 0 64 24 0zm96-80l32 0c22.1 0 40 17.9 40 40l0 64c0 22.1-17.9 40-40 40l-32 0-8 0 0-8 0-128 0-8 8 0zm8 128l24 0c13.3 0 24-10.7 24-24l0-64c0-13.3-10.7-24-24-24l-24 0 0 112zM424 368l8 0 48 0 8 0 0 16-8 0-40 0 0 48 40 0 8 0 0 16-8 0-40 0 0 56 0 8-16 0 0-8 0-64 0-64 0-8z" />
    </Icon>
);

export default FilePdf;