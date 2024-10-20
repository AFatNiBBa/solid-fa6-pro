
import { Icon } from "../../index";

/**
 * A component that renders the `block-question` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-question?s=sharp-thin block-question}
 * @preview ![block-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/block-question.svg)
 */
const BlockQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM80 96a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm272 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM80 384a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm272 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM136 192c0-30.9 25.1-56 56-56l56.2 0c35.2 0 63.8 28.6 63.8 63.8c0 21.4-10.8 41.5-28.7 53.3L232 286.9l0 25.1 0 8-16 0 0-8 0-29.5 0-4.3 3.6-2.4 54.9-36.2c13.4-8.8 21.5-23.8 21.5-39.9c0-26.4-21.4-47.8-47.8-47.8L192 152c-22.1 0-40 17.9-40 40l0 6.5-16 0 0-6.5zm72 152l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default BlockQuestion;