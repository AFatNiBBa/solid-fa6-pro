
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-to-dot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-dot?s=sharp-thin arrows-to-dot}
 * @preview ![arrows-to-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrows-to-dot.svg)
 */
const ArrowsToDot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 0l0 8 0 156.7L173.7 90.3 168 84.7 156.7 96l5.7 5.7 88 88 5.7 5.7 5.7-5.7 88-88 5.7-5.7L344 84.7l-5.7 5.7L264 164.7 264 8l0-8L248 0zM416 156.7l-5.7 5.7-88 88-5.7 5.7 5.7 5.7 88 88 5.7 5.7L427.3 344l-5.7-5.7L347.3 264 504 264l8 0 0-16-8 0-156.7 0 74.3-74.3 5.7-5.7L416 156.7zM256 240a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM101.7 162.3L96 156.7 84.7 168l5.7 5.7L164.7 248 8 248l-8 0 0 16 8 0 156.7 0L90.3 338.3 84.7 344 96 355.3l5.7-5.7 88-88 5.7-5.7-5.7-5.7-88-88zm60.7 248l-5.7 5.7L168 427.3l5.7-5.7L248 347.3 248 504l0 8 16 0 0-8 0-156.7 74.3 74.3 5.7 5.7L355.3 416l-5.7-5.7-88-88-5.7-5.7-5.7 5.7-88 88z" />
    </Icon>
);

export default ArrowsToDot;