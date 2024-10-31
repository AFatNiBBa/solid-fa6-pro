
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-plus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-plus?s=duotone comment-plus}
 * @preview ![comment-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/comment-plus.svg)
 */
const CommentPlus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3C1.6 455.8 0 459.9 0 464c0 2.1 .4 4.1 1.2 6.1c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm144 0c0-13.3 10.7-24 24-24l64 0 0-64c.1-13.4 10.8-24 24-24c6.6 0 12.6 2.7 17 7c2.2 2.2 3.9 4.8 5.1 7.6c.6 1.4 1.1 2.9 1.4 4.5c.2 .8 .3 1.6 .4 2.4s.1 1.6 .1 2.5c0 21.3 0 42.7 0 64l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c0 21.3 0 42.7 0 64.2c0 .6 0 1.4-.1 2.2s-.2 1.6-.4 2.4c-.3 1.6-.8 3.1-1.4 4.5c-1.2 2.9-3 5.5-5.1 7.6c-4.3 4.3-10.3 7-17 7c-13.3 0-24-10.7-24-24c0-21.3 0-42.7 0-64l-64 0c-13.3 0-24-10.7-24-24z" />
        <path d="M232 264l0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0z" />
    </Icon>
);

export default CommentPlus;