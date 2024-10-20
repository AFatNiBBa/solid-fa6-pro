
import { Icon } from "../../index";

/**
 * A component that renders the `block-question` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-question?s=thin block-question}
 * @preview ![block-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/block-question.svg)
 */
const BlockQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm136 96c0-30.9 25.1-56 56-56l56.2 0c35.2 0 63.8 28.6 63.8 63.8c0 21.4-10.8 41.5-28.7 53.3L232 286.9l0 25.1c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-29.5c0-2.7 1.4-5.2 3.6-6.7l54.9-36.2c13.4-8.8 21.5-23.8 21.5-39.9c0-26.4-21.4-47.8-47.8-47.8L192 152c-22.1 0-40 17.9-40 40l0 6.5c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-6.5zm72 168a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM64 112a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM368 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM64 400a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm304-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default BlockQuestion;