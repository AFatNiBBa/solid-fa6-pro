
import { Icon } from "../../index";

/**
 * A component that renders the `file-pdf` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pdf?s=thin file-pdf}
 * @preview ![file-pdf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/file-pdf.svg)
 */
const FilePdf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 496l48 0 0 16-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L204.1 0c12.7 0 24.9 5.1 33.9 14.1L369.9 145.9c9 9 14.1 21.2 14.1 33.9L384 304l-16 0 0-124.1c0-1.3-.1-2.6-.2-3.9L248 176c-22.1 0-40-17.9-40-40l0-119.8c-1.3-.2-2.6-.2-3.9-.2L64 16C37.5 16 16 37.5 16 64l0 384c0 26.5 21.5 48 48 48zM361.1 160c-.8-1-1.6-1.9-2.4-2.7L226.7 25.4c-.9-.9-1.8-1.7-2.7-2.4L224 136c0 13.3 10.7 24 24 24l113.1 0zM176 368l32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-24 0 0 40c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-48 0-80c0-4.4 3.6-8 8-8zm32 80c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0 0 64 24 0zm96-80l32 0c22.1 0 40 17.9 40 40l0 64c0 22.1-17.9 40-40 40l-32 0c-4.4 0-8-3.6-8-8l0-128c0-4.4 3.6-8 8-8zm8 128l24 0c13.3 0 24-10.7 24-24l0-64c0-13.3-10.7-24-24-24l-24 0 0 112zM424 376c0-4.4 3.6-8 8-8l48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-40 0 0 48 40 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-40 0 0 56c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-64 0-64z" />
    </Icon>
);

export default FilePdf;