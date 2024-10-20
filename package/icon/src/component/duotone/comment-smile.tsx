
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-smile` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-smile?s=duotone comment-smile}
 * @preview ![comment-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/comment-smile.svg)
 */
const CommentSmile: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3C1.6 455.8 0 459.9 0 464c0 2.1 .4 4.1 1.2 6.1c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm148.7 64c-8.8-9.9-8-25 1.9-33.9s25-8 33.9 1.9c17.6 19.7 43.1 32 71.6 32s53.9-12.3 71.6-32c8.8-9.9 24-10.7 33.9-1.9c5.3 4.7 8 11.3 8 17.9c0 5.7-2 11.4-6.1 16C337 333.4 298.6 352 256 352s-81-18.6-107.3-48zM224 176a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M224 176a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM184.4 272c-8.8-9.9-24-10.7-33.9-1.9s-10.7 24-1.9 33.9c26.3 29.4 64.7 48 107.3 48s81-18.6 107.3-48c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-17.6 19.7-43.1 32-71.6 32s-53.9-12.3-71.6-32z" />
    </Icon>
);

export default CommentSmile;