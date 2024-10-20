
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pen?s=sharp-duotone-solid file-pen}
 * @preview ![file-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-pen.svg)
 */
const FilePen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 140.3-117 117L253.4 512 0 512 0 0z" />
        <path d="M384 160l-160 0L224 0 384 160zm121.2 63.8l71 71-41.3 41.3-71-71 41.3-41.3zm-63.9 63.9l71 71L370.9 500.1 288 512l11.9-82.9L441.2 287.8z" />
    </Icon>
);

export default FilePen;