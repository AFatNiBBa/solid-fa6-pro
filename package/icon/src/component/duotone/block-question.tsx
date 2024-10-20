
import { Icon, generic } from "../../index";

/**
 * A component that renders the `block-question` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-question?s=duotone block-question}
 * @preview ![block-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/block-question.svg)
 */
const BlockQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm96 8a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 304a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm41.4-233.5l.4-1.2c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L248 272.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6zM256 360a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM400 104a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 304a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M48 104a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm304 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM72 384a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm280 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM137.8 173.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L248 272.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM192 360a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default BlockQuestion;