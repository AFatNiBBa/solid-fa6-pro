
import { Icon } from "../../index";

/**
 * A component that renders the `comment-question` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-question?s=sharp-thin comment-question}
 * @preview ![comment-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/comment-question.svg)
 */
const CommentQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M71.9 376.4l3.6-9.6-7.3-7.3C35.2 326.3 16 284.7 16 240C16 136.9 120.2 48 256 48s240 88.9 240 192s-104.2 192-240 192c-30 0-58.6-4.4-85-12.4l-4.6-1.4-4.6 1.4L42.3 455.4l29.6-79zM16 480l19.3-5.8 131.1-39.3c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L23.1 461.2 16 480zM168 168l0 6.5 16 0 0-6.5c0-22.1 17.9-40 40-40l56.2 0c26.4 0 47.8 21.4 47.8 47.8c0 16.1-8.1 31.1-21.5 39.9l-54.9 36.2-3.6 2.4 0 4.3 0 29.5 0 8 16 0 0-8 0-25.1L315.3 229c17.9-11.8 28.7-31.8 28.7-53.3c0-35.2-28.6-63.8-63.8-63.8L224 112c-30.9 0-56 25.1-56 56zm72 184l32 0 0-32-32 0 0 32z" />
    </Icon>
);

export default CommentQuestion;