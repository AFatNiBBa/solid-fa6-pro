
import { Icon } from "../../index";

/**
 * A component that renders the `message-question` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-question?s=sharp-thin message-question}
 * @preview ![message-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-question.svg)
 */
const MessageQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-16 0L16 416 0 416l0-16L0 16 0 0 16 0 496 0l16 0 0 16 0 384 0 16-16 0-192 0L176 501.3 160 512l0-19.2 0-60.8 0-16zm0-16l16 0 0 16 0 66.1 119.1-79.4 4-2.7 4.8 0 192 0 0-384L16 16l0 384 144 0zm8-264c0-30.9 25.1-56 56-56l56.2 0c35.2 0 63.8 28.6 63.8 63.8c0 21.4-10.8 41.5-28.7 53.3L264 230.9l0 25.1 0 8-16 0 0-8 0-29.5 0-4.3 3.6-2.4 54.9-36.2c13.4-8.8 21.5-23.8 21.5-39.9c0-26.4-21.4-47.8-47.8-47.8L224 96c-22.1 0-40 17.9-40 40l0 6.5-16 0 0-6.5zm72 152l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default MessageQuestion;