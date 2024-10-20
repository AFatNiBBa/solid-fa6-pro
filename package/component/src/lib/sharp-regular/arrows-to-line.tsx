
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-line` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-line?s=sharp-regular arrows-to-line}
 * @preview ![arrows-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrows-to-line.svg)
 */
const ArrowsToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 201.9l17-17 72-72 17-17L296 62.1 279 79l-31 31L248 24l0-24L200 0l0 24 0 86.1L169 79l-17-17L118.1 96l17 17 72 72 17 17zM0 232l0 48 24 0 400 0 24 0 0-48-24 0L24 232 0 232zm241 95l-17-17-17 17-72 72-17 17L152 449.9l17-17 31-31 0 86.1 0 24 48 0 0-24 0-86.1 31 31 17 17L329.9 416l-17-17-72-72z" />
    </Icon>
);

export default ArrowsToLine;