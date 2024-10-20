
import { Icon } from "../../index";

/**
 * A component that renders the `comment-heart` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-heart?s=sharp-thin comment-heart}
 * @preview ![comment-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/comment-heart.svg)
 */
const CommentHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M71.9 376.4l3.6-9.6-7.3-7.3C35.2 326.3 16 284.7 16 240C16 136.9 120.2 48 256 48s240 88.9 240 192s-104.2 192-240 192c-30 0-58.6-4.4-85-12.4l-4.6-1.4-4.6 1.4L42.3 455.4l29.6-79zM16 480l19.3-5.8 131.1-39.3c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L23.1 461.2 16 480zM244.9 196.1L256 206.8l11.1-10.7 7.7-7.4c8.5-8.2 19.8-12.7 31.6-12.7l2.4 0c23.9 0 43.2 19.3 43.2 43.2c0 11.7-4.8 23-13.2 31.1L256 329.9l-82.8-79.6c-8.5-8.1-13.2-19.4-13.2-31.1c0-23.9 19.3-43.2 43.2-43.2l2.4 0c11.8 0 23.1 4.6 31.6 12.7l7.7 7.4zm0 145.3L256 352.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0c-32.7 0-59.2 26.5-59.2 59.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6z" />
    </Icon>
);

export default CommentHeart;