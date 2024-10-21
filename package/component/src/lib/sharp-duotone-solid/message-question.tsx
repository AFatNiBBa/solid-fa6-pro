
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-question` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-question?s=sharp-duotone-solid message-question}
 * @preview ![message-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/message-question.svg)
 */
const MessageQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM168.3 130.3c-.1 .9-.2 1.9-.2 2.8s-.1 1.9-.1 2.5l0 .4c0 2.2 0 4.4 0 6.5l48 0c0-2.2 0-4.4 0-6.5c0-.4 0-.6 0-.8c0-.3 .1-.5 .1-.8c.1-.5 .3-1 .5-1.5c.4-1 1-1.8 1.7-2.5c1.4-1.4 3.4-2.3 5.7-2.3l56.9 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1c-14.8 8.5-29.6 17-44.3 25.4c-4 2.3-8 4.6-12.1 6.9c0 4.6 0 9.3 0 13.9c0 7.2 0 14.3 0 21.5c0 8 0 16 0 24l48 0c0-8 0-16 0-24c0-2.5 0-5 0-7.6c10.8-6.2 21.5-12.3 32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1L224 80c-15.5 0-29.5 6.3-39.6 16.4c-5.1 5.1-9.2 11.1-12 17.8c-1.4 3.4-2.5 6.9-3.3 10.5c-.4 1.8-.7 3.7-.8 5.5zM232 288c0 16 0 32 0 48l48 0c0-16 0-32 0-48l-48 0z" />
        <path d="M224 80c-30.9 0-56 25.1-56 56l0 6.5 48 0 0-6.5c0-4.4 3.6-8 8-8l56.9 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4L232 188.6l0 13.9 0 21.5 0 24 48 0 0-24 0-7.6 32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1L224 80zm56 208l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default MessageQuestion;