
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-question` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-question?s=duotone message-question}
 * @preview ![message-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/message-question.svg)
 */
const MessageQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64zm169.4 54.5c-4.4 12.5 2.1 26.2 14.6 30.6s26.2-2.1 30.6-14.6c.1-.2 .1-.4 .2-.6c1.4-3.9 4.4-5.9 7.8-5.9l58.3 0c4.2 0 8 1.7 10.7 4.4c1.4 1.4 2.5 3 3.2 4.8c.4 .9 .7 1.9 .9 2.8c.1 .5 .2 1 .2 1.5s.1 1 .1 1.5c0 .5 0 .8 0 1.1s-.1 .7-.1 1c-.1 .7-.2 1.3-.4 2c-.3 1.3-.9 2.5-1.5 3.6c-1.3 2.3-3.2 4.2-5.6 5.5c-14.8 8.5-29.6 17-44.3 25.4c-7.5 4.3-12.1 12.2-12.1 20.8c0 4.5 0 9 0 13.5c0 13.3 10.7 24 24 24c6.6 0 12.5-2.6 16.8-6.9c2.2-2.1 3.9-4.7 5.2-7.5c.6-1.4 1.1-2.9 1.4-4.4c.2-.8 .3-1.6 .4-2.3s.1-1.6 .2-2.3c10.8-6.3 21.5-12.5 32.3-18.6c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1l-58.3 0c-23.7 0-44.8 14.9-52.8 37.3c-.1 .4-.3 .8-.4 1.2zM224 304c0 17.7 14.3 32 32 32c8.8 0 16.8-3.6 22.6-9.4c2.9-2.9 5.2-6.3 6.9-10.2c.8-1.9 1.4-3.9 1.9-6c.2-1 .4-2.1 .5-3.2c.1-.6 .1-1.1 .1-1.6c0-.5 0-1 0-1.5c0-.8 0-1.3 0-1.8s-.1-1.1-.1-1.6c-.1-1.1-.3-2.1-.5-3.2c-.4-2.1-1.1-4.1-1.9-6c-1.6-3.8-4-7.3-6.9-10.2c-5.8-5.8-13.8-9.4-22.6-9.4c-17.7 0-32 14.3-32 32z" />
        <path d="M222.6 80c-23.7 0-44.8 14.9-52.8 37.3l-.4 1.2c-4.4 12.5 2.1 26.2 14.6 30.6s26.2-2.1 30.6-14.6l.4-1.2c1.1-3.2 4.2-5.3 7.5-5.3l58.3 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4c-7.5 4.3-12.1 12.2-12.1 20.8l0 13.5c0 13.3 10.7 24 24 24c13.1 0 23.8-10.5 24-23.6l32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1l-58.3 0zM256 336a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default MessageQuestion;