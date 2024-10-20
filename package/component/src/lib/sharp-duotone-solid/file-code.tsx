
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-code` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-code?s=sharp-duotone-solid file-code}
 * @preview ![file-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-code.svg)
 */
const FileCode: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0c0 53.3 0 106.7 0 160l160 0 0 352L0 512 0 0zM54.1 320c5.7 5.7 11.3 11.3 17 17c16 16 32 32 48 48c5.7 5.7 11.3 11.3 17 17c11.3-11.3 22.6-22.6 33.9-33.9c-5.7-5.7-11.3-11.3-17-17l-31-31c10.3-10.3 20.7-20.7 31-31c5.7-5.7 11.3-11.3 17-17c-11.3-11.3-22.6-22.6-33.9-33.9c-5.7 5.7-11.3 11.3-17 17L71 303l-17 17zm160-48c5.7 5.7 11.3 11.3 17 17c10.3 10.3 20.7 20.7 31 31c-10.3 10.3-20.7 20.7-31 31l-17 17c11.3 11.3 22.6 22.6 33.9 33.9c5.7-5.7 11.3-11.3 17-17c16-16 32-32 48-48c5.7-5.7 11.3-11.3 17-17c-5.7-5.7-11.3-11.3-17-17c-16-16-32-32-48-48l-17-17c-11.3 11.3-22.6 22.6-33.9 33.9z" />
        <path d="M384 160L224 0l0 160 160 0zM153 289l17-17L136 238.1l-17 17L71 303l-17 17 17 17 48 48 17 17L169.9 368l-17-17-31-31 31-31zM265 255l-17-17L214.1 272l17 17 31 31-31 31-17 17L248 401.9l17-17 48-48 17-17-17-17-48-48z" />
    </Icon>
);

export default FileCode;