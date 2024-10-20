
import { Icon } from "../../index";

/**
 * A component that renders the `message-question` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-question?s=thin message-question}
 * @preview ![message-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/message-question.svg)
 */
const MessageQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 416c0-8.8-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-138.7 0c-3.5 0-6.8 1.1-9.6 3.2L176 496l0-80zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l80 0 16 0 0 16 0 64c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM168 136l0 6.5c0 4.4 3.6 8 8 8s8-3.6 8-8l0-6.5c0-22.1 17.9-40 40-40l56.2 0c26.4 0 47.8 21.4 47.8 47.8c0 16.1-8.1 31.1-21.5 39.9l-54.9 36.2c-2.2 1.5-3.6 4-3.6 6.7l0 29.5c0 4.4 3.6 8 8 8s8-3.6 8-8l0-25.1L315.3 197c17.9-11.8 28.7-31.8 28.7-53.3c0-35.2-28.6-63.8-63.8-63.8L224 80c-30.9 0-56 25.1-56 56zM272 304a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default MessageQuestion;