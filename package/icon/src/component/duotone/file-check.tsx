
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-check?s=duotone file-check}
 * @preview ![file-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-check.svg)
 */
const FileCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0c0 42.7 0 85.3 0 128c0 .6 0 1.1 0 1.6s.1 1.1 .1 1.6c.1 1.1 .3 2.1 .5 3.2c.2 1 .5 2.1 .8 3.1c.2 .5 .3 1 .5 1.5c.2 .5 .4 .9 .6 1.4c1.6 3.8 4 7.3 6.9 10.2s6.3 5.2 10.2 6.9c1.9 .8 3.9 1.4 6 1.9c1 .2 2.1 .4 3.2 .5c.5 .1 1.1 .1 1.6 .1s1.1 0 1.6 0l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM72 328c0-.8 0-.4 0 0z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM305 281c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L305 281z" />
    </Icon>
);

export default FileCheck;