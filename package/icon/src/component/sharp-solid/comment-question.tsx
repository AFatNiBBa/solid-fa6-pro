
import { Icon } from "../../index";

/**
 * A component that renders the `comment-question` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-question?s=sharp-solid comment-question}
 * @preview ![comment-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/comment-question.svg)
 */
const CommentQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240c0 114.9-114.6 208-256 208c-31.5 0-61.7-4.6-89.6-13.1L16 480 56.9 370.8C21.3 335.1 0 289.6 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208zM168 168l0 6.5 48 0 0-6.5c0-4.4 3.6-8 8-8l56.9 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4L232 220.6l0 13.9 0 21.5 0 24 48 0 0-24 0-7.6 32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1L224 112c-30.9 0-56 25.1-56 56zm64 200l48 0 0-48-48 0 0 48z" />
    </Icon>
);

export default CommentQuestion;