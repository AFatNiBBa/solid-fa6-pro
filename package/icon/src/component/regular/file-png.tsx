
import { Icon } from "../../index";

/**
 * A component that renders the `file-png` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-png?s=regular file-png}
 * @preview ![file-png](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/file-png.svg)
 */
const FilePng: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM318.3 360.8L352 428.2l0-60.2c0-8.8 7.2-16 16-16s16 7.2 16 16l0 128c0 7.4-5.1 13.9-12.3 15.6s-14.7-1.8-18-8.4L320 435.8l0 60.2c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128c0-7.4 5.1-13.9 12.3-15.6s14.7 1.8 18 8.4zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm208-40c0-22.1 17.9-40 40-40l16 0c22.1 0 40 17.9 40 40l0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8l0 80c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-8c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 24c0 22.1-17.9 40-40 40l-16 0c-22.1 0-40-17.9-40-40l0-80z" />
    </Icon>
);

export default FilePng;