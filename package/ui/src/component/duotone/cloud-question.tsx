
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-question` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-question?s=duotone cloud-question}
 * @preview ![cloud-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-question.svg)
 */
const CloudQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336zM233.4 198.5c.1-.4 .3-.8 .4-1.2c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L344 296.4c-.2 13-10.9 23.6-24 23.6c-6.6 0-12.6-2.7-17-7c-2.2-2.2-3.9-4.8-5.1-7.6c-.6-1.4-1.1-2.9-1.4-4.5c-.2-.8-.3-1.6-.4-2.4s-.1-1.6-.1-2.5c0-4.5 0-9 0-13.6c0-.4 0-.9 .1-1.4s.1-1.1 .2-1.6c.1-1 .3-2.1 .6-3.1c.5-2 1.4-3.9 2.4-5.7c2.1-3.6 5.1-6.6 8.8-8.8c14.8-8.5 29.6-17 44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3c-.1 .4-.3 .8-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6zm54.8 182.2c.1-1.1 .3-2.1 .5-3.2c.4-2.1 1.1-4.1 1.9-6c1.6-3.8 4-7.3 6.9-10.2c5.8-5.8 13.8-9.4 22.6-9.4c17.7 0 32 14.3 32 32s-14.3 32-32 32c-8.8 0-16.8-3.6-22.6-9.4c-2.9-2.9-5.2-6.3-6.9-10.2c-.8-1.9-1.4-3.9-1.9-6c-.2-1-.4-2.1-.5-3.2c-.1-.5-.1-1.1-.1-1.6s0-1.1 0-1.8c0-.4 0-1 0-1.5s.1-1.1 .1-1.6z" />
        <path d="M286.6 160c-23.7 0-44.8 14.9-52.8 37.3l-.4 1.2c-4.4 12.5 2.1 26.2 14.6 30.6s26.2-2.1 30.6-14.6l.4-1.2c1.1-3.2 4.2-5.3 7.5-5.3l58.3 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4c-7.5 4.3-12.1 12.2-12.1 20.8l0 13.5c0 13.3 10.7 24 24 24c13.1 0 23.8-10.5 24-23.6l32.3-18.5c19.6-11.3 31.7-32.2 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1l-58.3 0zM320 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default CloudQuestion;