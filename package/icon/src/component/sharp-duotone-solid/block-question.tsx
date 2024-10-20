
import { Icon, generic } from "../../index";

/**
 * A component that renders the `block-question` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-question?s=sharp-duotone-solid block-question}
 * @preview ![block-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/block-question.svg)
 */
const BlockQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm96 72a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 304a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm40-208c0-30.9 25.1-56 56-56l56.9 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L248 280.4l0 7.6 0 24-48 0 0-24 0-21.5 0-13.9 12.1-6.9 44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1L192 192c-4.4 0-8 3.6-8 8l0 6.5-48 0 0-6.5zm64 152l48 0 0 48-48 0 0-48zM400 104a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 304a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M48 104a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm304 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM72 384a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm280 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM136 200c0-30.9 25.1-56 56-56l56.9 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L248 280.4l0 7.6 0 24-48 0 0-24 0-21.5 0-13.9 12.1-6.9 44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1L192 192c-4.4 0-8 3.6-8 8l0 6.5-48 0 0-6.5zm64 152l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default BlockQuestion;