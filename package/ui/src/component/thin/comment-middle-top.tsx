
import { Icon } from "../../index";

/**
 * A component that renders the `comment-middle-top` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle-top?s=thin comment-middle-top}
 * @preview ![comment-middle-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/comment-middle-top.svg)
 */
const CommentMiddleTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M202.6 110.5l44.5-89c1.7-3.4 5.1-5.5 8.8-5.5s7.2 2.1 8.8 5.5l44.5 89c2.2 4.3 6.1 7.4 10.8 8.5C423.8 142 496 217.9 496 304c0 103.1-104.2 192-240 192S16 407.1 16 304c0-86.1 72.2-162 175.8-185c4.7-1 8.7-4.2 10.8-8.5zm121-7.2l-44.5-89C274.8 5.5 265.8 0 256 0s-18.8 5.5-23.2 14.3l-44.5 89C79.8 127.5 0 208.2 0 304C0 418.9 114.6 512 256 512s256-93.1 256-208c0-95.8-79.8-176.5-188.3-200.7z" />
    </Icon>
);

export default CommentMiddleTop;