
import { Icon } from "../../index";

/**
 * A component that renders the `file-plus-minus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-plus-minus?s=sharp-regular file-plus-minus}
 * @preview ![file-plus-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/file-plus-minus.svg)
 */
const FilePlusMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 464L48 48l176 0 0 112 112 0 0 304L48 464zM256 0L48 0 0 0 0 48 0 464l0 48 48 0 288 0 48 0 0-48 0-336L256 0zM216 200l0-24-48 0 0 24 0 40-40 0-24 0 0 48 24 0 40 0 0 40 0 24 48 0 0-24 0-40 40 0 24 0 0-48-24 0-40 0 0-40zM128 384l-24 0 0 48 24 0 128 0 24 0 0-48-24 0-128 0z" />
    </Icon>
);

export default FilePlusMinus;