
import { Icon } from "../../index";

/**
 * A component that renders the `file-dashed-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-dashed-line?s=sharp-light file-dashed-line}
 * @preview ![file-dashed-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/file-dashed-line.svg)
 */
const FileDashedLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M480 192l0 64 32 0 0-112L368 0 160 0 128 0l0 32 0 224 32 0 0-224 160 0 0 144 0 16 16 0 144 0zM160 480l0-128-32 0 0 128 0 32 32 0 320 0 32 0 0-32 0-128-32 0 0 128-320 0zM480 160l-128 0 0-128 2.7 0L480 157.3l0 2.7zM48 288l-16 0 0 32 16 0 128 0 16 0 0-32-16 0L48 288zm224 0l-16 0 0 32 16 0 96 0 16 0 0-32-16 0-96 0zm192 0l-16 0 0 32 16 0 128 0 16 0 0-32-16 0-128 0z" />
    </Icon>
);

export default FileDashedLine;