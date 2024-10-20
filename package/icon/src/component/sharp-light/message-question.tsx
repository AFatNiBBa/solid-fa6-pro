
import { Icon } from "../../index";

/**
 * A component that renders the `message-question` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-question?s=sharp-light message-question}
 * @preview ![message-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/message-question.svg)
 */
const MessageQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-32 0-96 0L0 416l0-32L0 32 0 0 32 0 480 0l32 0 0 32 0 352 0 32-32 0-176 0L192 490.7 160 512l0-38.5 0-25.5 0-32zm0-32l32 0 0 32 0 36.2 94.2-62.8 8.1-5.4 9.7 0 176 0 0-352L32 32l0 352 128 0zm8-248c0-30.9 25.1-56 56-56l56 0c35.5 0 64 29 64 64.3c0 24-13.4 46.2-34.9 57.2L272 220.3l0 3.7 0 16-32 0 0-16 0-13.5 0-9.8 8.7-4.5 45.8-23.4c10.7-5.4 17.5-16.6 17.5-28.7c0-17.8-14.4-32.3-32-32.3l-56 0c-13.3 0-24 10.7-24 24l0 8-32 0 0-8zm64 136l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default MessageQuestion;