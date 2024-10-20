
import { Icon } from "../../index";

/**
 * A component that renders the `comment-question` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-question?s=sharp-light comment-question}
 * @preview ![comment-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/comment-question.svg)
 */
const CommentQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M86.9 382l7.2-19.3L79.6 348.2C49.1 317.6 32 279.9 32 240c0-91.3 93.8-176 224-176s224 84.7 224 176s-93.8 176-224 176c-28.4 0-55.5-4.2-80.3-11.7l-9.2-2.8-9.3 2.8L68.6 430.8 86.9 382zM16 480l38.5-11.6 111.9-33.6c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 49.6 21.3 95.1 56.9 130.8L30.1 442.4 16 480zM168 168l0 8 32 0 0-8c0-13.3 10.7-24 24-24l56 0c17.6 0 32 14.5 32 32.3c0 12.1-6.8 23.2-17.5 28.7l-45.8 23.4-8.7 4.5 0 9.8 0 13.5 0 16 32 0 0-16 0-3.7 37.1-18.9c21.5-11 34.9-33.2 34.9-57.2c0-35.2-28.5-64.3-64-64.3l-56 0c-30.9 0-56 25.1-56 56zm64 136l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default CommentQuestion;