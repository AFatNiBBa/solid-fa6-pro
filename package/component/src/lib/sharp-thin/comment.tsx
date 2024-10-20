
import { Icon } from "../../index";

/**
 * A component that renders the `comment` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment?s=sharp-thin comment}
 * @preview ![comment](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/comment.svg)
 */
const Comment: typeof Icon = x => (
    <Icon {...x}>
        <path d="M75.5 366.8l-3.6 9.6-29.6 79 119.5-35.8 4.6-1.4 4.6 1.4c26.4 8 55 12.4 85 12.4c135.8 0 240-88.9 240-192S391.8 48 256 48S16 136.9 16 240c0 44.7 19.2 86.3 52.3 119.5l7.3 7.3zM35.3 474.2L16 480l7.1-18.8 33.9-90.4C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L35.3 474.2z" />
    </Icon>
);

export default Comment;