
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-music` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-music?s=sharp-duotone-solid folder-music}
 * @preview ![folder-music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/folder-music.svg)
 */
const FolderMusic: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM128 384c0-17.7 21.5-32 48-32c5.6 0 11 .6 16 1.8l0-81.8 0-32 0-11.1 10.4-3.9 128-48 21.6-8.1 0 23.1 0 32 0 128c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-74.7-96 36L224 384c0 17.7-21.5 32-48 32s-48-14.3-48-32z" />
        <path d="M352 168.9l0 23.1 0 32 0 128c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-74.7-96 36L224 384c0 17.7-21.5 32-48 32s-48-14.3-48-32s21.5-32 48-32c5.6 0 11 .6 16 1.8l0-81.8 0-32 0-11.1 10.4-3.9 128-48 21.6-8.1z" />
    </Icon>
);

export default FolderMusic;