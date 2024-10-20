
import { Icon } from "../../index";

/**
 * A component that renders the `file-png` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-png?s=sharp-thin file-png}
 * @preview ![file-png](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-png.svg)
 */
const FilePng: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 496l96 0 0 16-96 0L0 512l0-16L0 16 0 0 16 0 224 0 384 160l0 144-16 0 0-128-152 0-8 0 0-8 0-152L16 16l0 480zM361.4 160L224 22.6 224 160l137.4 0zM176 368l32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-24 0 0 40 0 8-16 0 0-8 0-48 0-80 0-8 8 0zm32 80c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0 0 64 24 0zm96-80l4 0 5.3 0 2.1 4.9 44.6 105L360 376l0-8 16 0 0 8 0 128 0 8-8 0-5.6 0-5.3 0-2.1-4.9L312 405.9l0 98.1 0 8-16 0 0-8 0-128 0-8 8 0zm120 32c0-17.7 14.3-32 32-32l16 0c17.7 0 32 14.3 32 32l0 16-16 0 0-16c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16-8 0-8 0 0-16 8 0 16 0 8 0 0 8 0 24c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-80z" />
    </Icon>
);

export default FilePng;