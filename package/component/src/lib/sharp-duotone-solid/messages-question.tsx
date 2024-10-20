
import { Icon, generic } from "../../index";

/**
 * A component that renders the `messages-question` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages-question?s=sharp-duotone-solid messages-question}
 * @preview ![messages-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/messages-question.svg)
 */
const MessagesQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L416 0l0 320-213.3 0L96 384l0-64L0 320 0 0zM134.9 103.2c-.1 .7-.1 1.5-.2 2.1c0 .8-.1 1.6-.1 2.4c0 2.1 0 4 0 5.8c13.3 0 26.7 0 40 0c0-1.8 0-3.6 0-5.5c0-.7 0-.7 .1-1.4c.1-.4 .2-.8 .4-1.2c.3-.8 .8-1.5 1.4-2.1c1.2-1.2 2.9-2 4.7-2l47.4 0c7 0 12.6 5.7 12.6 12.6c0 4.5-2.4 8.7-6.3 10.9C222.7 132 210.4 139 198 146.1c-3.3 1.9-6.7 3.8-10 5.8c0 3.9 0 7.7 0 11.6c0 6 0 11.9 0 17.9c0 6.7 0 13.3 0 20c13.3 0 26.7 0 40 0c0-6.7 0-13.3 0-20c0-2.1 0-4.2 0-6.3c9-5.1 17.9-10.3 26.9-15.4c16.4-9.4 26.4-26.8 26.4-45.6c0-29.1-23.6-52.6-52.6-52.6c-15.8 0-31.6 0-47.4 0c-12.9 0-24.6 5.2-33 13.7c-4.2 4.2-7.6 9.3-10 14.8c-1.2 2.8-2.1 5.7-2.7 8.7c-.3 1.5-.5 3.1-.7 4.6zM188 234.7a28.3 28.3 0 1 0 40 40 28.3 28.3 0 1 0 -40-40z" />
        <path d="M134.7 108c0-25.8 20.9-46.7 46.7-46.7l47.4 0c29.1 0 52.6 23.6 52.6 52.6c0 18.8-10.1 36.3-26.4 45.6L228 175l0 6.3 0 20-40 0 0-20 0-17.9 0-11.6 10-5.8L235 124.9c3.9-2.3 6.3-6.4 6.3-10.9c0-7-5.7-12.6-12.6-12.6l-47.4 0c-3.7 0-6.7 3-6.7 6.7l0 5.5-40 0 0-5.5zM188 234.7l40 0 0 40-40 0 0-40zM256 448l0-96 192 0 0-224 192 0 0 320-96 0 0 64L437.3 448 256 448z" />
    </Icon>
);

export default MessagesQuestion;