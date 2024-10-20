
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-arrow-up-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-arrow-up-right?s=duotone comment-arrow-up-right}
 * @preview ![comment-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/comment-arrow-up-right.svg)
 */
const CommentArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c-4.6 4.6-6 11.5-3.5 17.5c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm160 72c0-6.1 2.3-12.3 7-17l87-87L200 208c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-54.1-87 87c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7s-7-10.8-7-17z" />
        <path d="M176 184c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-54.1-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87L200 208c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default CommentArrowUpRight;