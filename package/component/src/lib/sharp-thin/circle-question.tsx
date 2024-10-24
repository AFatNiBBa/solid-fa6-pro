
import { Icon } from "../../index";

/**
 * A component that renders the `circle-question` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-question?s=sharp-thin circle-question}
 * @preview ![circle-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-question.svg)
 */
const CircleQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm168-56c0-30.9 25.1-56 56-56l56.2 0c35.2 0 63.8 28.6 63.8 63.8c0 21.4-10.8 41.5-28.7 53.3L264 294.9l0 25.1 0 8-16 0 0-8 0-29.5 0-4.3 3.6-2.4 54.9-36.2c13.4-8.8 21.5-23.8 21.5-39.9c0-26.4-21.4-47.8-47.8-47.8L224 160c-22.1 0-40 17.9-40 40l0 6.5-16 0 0-6.5zm72 184l0-32 32 0 0 32-32 0z" />
    </Icon>
);

export default CircleQuestion;