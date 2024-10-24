
import { Icon } from "../../index";

/**
 * A component that renders the `tags` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tags?s=sharp-regular tags}
 * @preview ![tags](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tags.svg)
 */
const Tags: typeof Icon = x => (
    <Icon {...x}>
        <path d="M495.2 189.3l7 7 0 9.9 0 99.5 0 9.9-7 7L337 481 303 447 454.2 295.8l0-79.6L303 65 337 31 495.2 189.3zM48 236.1l176 176 144-144 0-24.2L204.1 80 48 80l0 156.1zM224 32L416 224l0 64L257.9 446.1 224 480l-33.9-33.9L0 256 0 80 0 32l48 0 176 0zM80 144a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Tags;