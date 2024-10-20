
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-middle-top` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle-top?s=duotone comment-middle-top}
 * @preview ![comment-middle-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/comment-middle-top.svg)
 */
const CommentMiddleTop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M188.3 103.3l44.5-89C237.2 5.5 246.2 0 256 0s18.8 5.5 23.2 14.3l44.5 89C432.2 127.5 512 208.2 512 304c0 114.9-114.6 208-256 208S0 418.9 0 304c0-95.8 79.8-176.5 188.3-200.7z" />
    </Icon>
);

export default CommentMiddleTop;