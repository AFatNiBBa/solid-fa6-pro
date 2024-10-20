
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-mp3` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-mp3?s=duotone file-mp3}
 * @preview ![file-mp3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-mp3.svg)
 */
const FileMp3: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-240 0c-35.3 0-64 28.7-64 64l0 144-16 0c-35.3 0-64-28.7-64-64L0 64z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM139.7 352.6c-6.9 1.9-11.7 8.2-11.7 15.4l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-70.2 18.3 30.5c2.9 4.8 8.1 7.8 13.7 7.8s10.8-3 13.7-7.8L224 425.8l0 70.2c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-7.2-4.8-13.5-11.7-15.4s-14.3 1-18 7.2L192 416.9l-34.3-57.1c-3.7-6.2-11.1-9.1-18-7.2zM288 368l0 80 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0c-8.8 0-16 7.2-16 16zm32 64l0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-16 0zm144 80c26.5 0 48-21.5 48-48c0-12.3-4.6-23.5-12.2-32c7.6-8.5 12.2-19.7 12.2-32c0-26.5-21.5-48-48-48l-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-24 0c-8.3 0-15.1 6.3-15.9 14.4c-.1 .5-.1 1.1-.1 1.6c0 8.8 7.2 16 16 16l24 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0z" />
    </Icon>
);

export default FileMp3;