
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-down?s=sharp-duotone-solid file-arrow-down}
 * @preview ![file-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-arrow-down.svg)
 */
const FileArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0c0 53.3 0 106.7 0 160l160 0 0 352L0 512 0 0zM86.1 320c5.7 5.7 11.3 11.3 17 17c24 24 48 48 72 72c5.7 5.7 11.3 11.3 17 17c5.7-5.7 11.3-11.3 17-17c24-24 48-48 72-72c5.7-5.7 11.3-11.3 17-17c-11.3-11.3-22.6-22.6-33.9-33.9c-5.7 5.7-11.3 11.3-17 17l-31 31c0-34 0-68 0-102.1c0-8 0-16 0-24l-48 0c0 8 0 16 0 24c0 34 0 68 0 102.1l-31-31-17-17c-11.3 11.3-22.6 22.6-33.9 33.9z" />
        <path d="M384 160L224 0l0 160 160 0zM216 232l0-24-48 0 0 24 0 102.1-31-31-17-17L86.1 320l17 17 72 72 17 17 17-17 72-72 17-17L264 286.1l-17 17-31 31L216 232z" />
    </Icon>
);

export default FileArrowDown;