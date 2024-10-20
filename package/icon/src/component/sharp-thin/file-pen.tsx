
import { Icon } from "../../index";

/**
 * A component that renders the `file-pen` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-pen?s=sharp-thin file-pen}
 * @preview ![file-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/file-pen.svg)
 */
const FilePen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 496l242.1 0-2.5 16L16 512 0 512l0-16L0 16 0 0 16 0 224 0 384 160l0 133.5-16 16L368 176l-152 0-8 0 0-8 0-152L16 16l0 480zM361.4 160L224 22.6 224 160l137.4 0zm137.5 63.9l11.3 11.3 54.5 54.5L576 300.9l-11.3 11.3L379.3 497.6l-74.7 11.6L288 511.9l2.6-16.6 11.6-74.7L498.9 223.9zM317.2 428.2l-10 64.5 64.5-10L509.5 344.8 455 290.4 317.2 428.2zM553.4 300.9l-54.5-54.5L466.4 279l54.5 54.5 32.5-32.5z" />
    </Icon>
);

export default FilePen;