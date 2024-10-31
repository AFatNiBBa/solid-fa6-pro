
import { Icon } from "../../index";

/**
 * A component that renders the `comment-image` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-image?s=solid comment-image}
 * @preview ![comment-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/comment-image.svg)
 */
const CommentImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm168-16c7.6 0 14.7 3.6 19.2 9.6l96 128c5.5 7.3 6.3 17 2.3 25.1s-12.4 13.3-21.5 13.3l-192 0-80 0c-9.3 0-17.8-5.4-21.7-13.8s-2.7-18.4 3.3-25.5l40-48c4.6-5.5 11.3-8.6 18.4-8.6s13.9 3.2 18.4 8.6L199 257.3l77.8-103.7c4.5-6 11.6-9.6 19.2-9.6z" />
    </Icon>
);

export default CommentImage;