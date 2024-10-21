
import { Icon } from "../../index";

/**
 * A component that renders the `comment-middle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle?s=thin comment-middle}
 * @preview ![comment-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/comment-middle.svg)
 */
const CommentMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M202.6 401.5l44.5 89c1.7 3.4 5.1 5.5 8.8 5.5s7.2-2.1 8.8-5.5l44.5-89c2.2-4.3 6.1-7.4 10.8-8.5C423.8 370 496 294.1 496 208C496 104.9 391.8 16 256 16S16 104.9 16 208c0 86.1 72.2 162 175.8 185c4.7 1 8.7 4.2 10.8 8.5zm121 7.2l-44.5 89c-4.4 8.8-13.3 14.3-23.2 14.3s-18.8-5.5-23.2-14.3l-44.5-89C79.8 384.5 0 303.8 0 208C0 93.1 114.6 0 256 0S512 93.1 512 208c0 95.8-79.8 176.5-188.3 200.7z" />
    </Icon>
);

export default CommentMiddle;