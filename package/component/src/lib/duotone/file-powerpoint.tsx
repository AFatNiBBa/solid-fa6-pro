
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-powerpoint` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-powerpoint?s=duotone file-powerpoint}
 * @preview ![file-powerpoint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-powerpoint.svg)
 */
const FilePowerpoint: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM112 264l0 104 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 44 0c42 0 76-34 76-76s-34-76-76-76l-68 0c-13.3 0-24 10.7-24 24zm48 24l44 0c15.5 0 28 12.5 28 28s-12.5 28-28 28l-44 0 0-56z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM136 240c-13.3 0-24 10.7-24 24l0 104 0 56c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 44 0c42 0 76-34 76-76s-34-76-76-76l-68 0zm68 104l-44 0 0-56 44 0c15.5 0 28 12.5 28 28s-12.5 28-28 28z" />
    </Icon>
);

export default FilePowerpoint;