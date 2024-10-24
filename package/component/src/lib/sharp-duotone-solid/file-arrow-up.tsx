
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-arrow-up?s=sharp-duotone-solid file-arrow-up}
 * @preview ![file-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-arrow-up.svg)
 */
const FileArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0C74.7 0 149.3 0 224 0c0 53.3 0 106.7 0 160l160 0 0 352L0 512 0 0zM86.1 304c11.3 11.3 22.6 22.6 33.9 33.9c5.7-5.7 11.3-11.3 17-17c10.3-10.3 20.7-20.7 31-31c0 34 0 68 0 102.1c0 8 0 16 0 24l48 0c0-8 0-16 0-24c0-34 0-68 0-102.1c10.3 10.3 20.7 20.7 31 31c5.7 5.7 11.3 11.3 17 17c11.3-11.3 22.6-22.6 33.9-33.9c-5.7-5.7-11.3-11.3-17-17c-24-24-48-48-72-72l-17-17-17 17c-24 24-48 48-72 72l-17 17z" />
        <path d="M384 160l-160 0L224 0 384 160zM216 392l0 24-48 0 0-24 0-102.1-31 31-17 17L86.1 304l17-17 72-72 17-17 17 17 72 72 17 17L264 337.9l-17-17-31-31L216 392z" />
    </Icon>
);

export default FileArrowUp;