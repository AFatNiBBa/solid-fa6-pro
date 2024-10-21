
import { Icon } from "../../index";

/**
 * A component that renders the `file-prescription` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-prescription?s=light file-prescription}
 * @preview ![file-prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-prescription.svg)
 */
const FilePrescription: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 480L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l128 0 0 112c0 26.5 21.5 48 48 48l112 0 0 256c0 17.7-14.3 32-32 32zM240 160c-8.8 0-16-7.2-16-16l0-111.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4L240 160zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-284.1c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1L64 0zm48 224c-8.8 0-16 7.2-16 16l0 80 0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 41.4 0 48 48-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L240 406.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L262.6 384l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L240 361.4l-31.2-31.2C227.3 321.1 240 302 240 280c0-30.9-25.1-56-56-56l-72 0zm72 80l-8 0-48 0 0-48 56 0c13.3 0 24 10.7 24 24s-10.7 24-24 24z" />
    </Icon>
);

export default FilePrescription;