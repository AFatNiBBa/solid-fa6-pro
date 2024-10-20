
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-arrow-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-arrow-down?s=duotone comment-arrow-down}
 * @preview ![comment-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/comment-arrow-down.svg)
 */
const CommentArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3C1.6 455.8 0 459.9 0 464c0 2.1 .4 4.1 1.2 6.1c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm160 16c0-6.1 2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l31 31L232 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 118.1 31-31c9.4-9.4 24.6-9.4 33.9 0c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17l-72 72c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7l-72-72c-4.7-4.7-7-10.8-7-17z" />
        <path d="M256 128c13.3 0 24 10.7 24 24l0 118.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L232 152c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default CommentArrowDown;