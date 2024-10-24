
import { Icon } from "../../index";

/**
 * A component that renders the `folder-music` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-music?s=sharp-thin folder-music}
 * @preview ![folder-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder-music.svg)
 */
const FolderMusic: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 224 0 16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 208 0zm48 80l-8 0-4.8-6.4L216 48 16 48l0 416 480 0 0-352-224 0zm80 68.5l0 11.5 0 152c0 22.1-21.5 40-48 40s-48-17.9-48-40s21.5-40 48-40c12.3 0 23.5 3.9 32 10.2l0-110.6-112 42L224 376c0 22.1-21.5 40-48 40s-48-17.9-48-40s21.5-40 48-40c12.3 0 23.5 3.9 32 10.2L208 240l0-5.5 5.2-1.9 128-48 10.8-4.1zM304 320c-20.5 0-32 13.4-32 24s11.5 24 32 24s32-13.4 32-24s-11.5-24-32-24zM176 352c-20.5 0-32 13.4-32 24s11.5 24 32 24s32-13.4 32-24s-11.5-24-32-24z" />
    </Icon>
);

export default FolderMusic;