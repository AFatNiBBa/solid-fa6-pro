
import { Icon } from "../../index";

/**
 * A component that renders the `file-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-lock?s=sharp-thin file-lock}
 * @preview ![file-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-lock.svg)
 */
const FileLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 496L16 496 16 16l192 0 0 152 0 8 8 0 104 0 48 0 16 0 0-16L224 0 16 0 0 0 0 16 0 496l0 16 16 0 304 0 0-16zM224 22.6L361.4 160 224 160l0-137.4zM464 208c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-32 0-16 0 0 16 0 160 0 16 16 0 192 0 16 0 0-16 0-160 0-16-16 0-32 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM368 496l0-160 32 0 16 0 96 0 16 0 32 0 0 160-192 0z" />
    </Icon>
);

export default FileLock;