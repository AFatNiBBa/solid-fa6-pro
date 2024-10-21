
import { Icon } from "../../index";

/**
 * A component that renders the `message-question` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-question?s=light message-question}
 * @preview ![message-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/message-question.svg)
 */
const MessageQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 416c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 288c0 17.7-14.3 32-32 32l-138.7 0c-6.9 0-13.7 2.2-19.2 6.4L192 464l0-48zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l64 0 32 0 0 32 0 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM168.7 121.8l-.2 .7c-2.2 8.5 2.9 17.3 11.4 19.5s17.3-2.9 19.5-11.4l.2-.7c2.8-10.6 12.3-17.9 23.2-17.9l57.1 0c17.6 0 32 14.5 32 32.3c0 12.1-6.8 23.2-17.5 28.7l-45.8 23.4c-5.4 2.7-8.7 8.2-8.7 14.3l0 29.5c0 8.8 7.2 16 16 16s16-7.2 16-16l0-19.7 37.1-18.9c21.5-11 34.9-33.2 34.9-57.2C344 109 315.5 80 280 80l-57.1 0c-25.5 0-47.7 17.2-54.2 41.8zM280 304a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default MessageQuestion;