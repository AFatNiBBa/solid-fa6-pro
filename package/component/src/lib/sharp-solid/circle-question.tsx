
import { Icon } from "../../index";

/**
 * A component that renders the `circle-question` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-question?s=sharp-solid circle-question}
 * @preview ![circle-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-question.svg)
 */
const CircleQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 184c0-30.9 25.1-56 56-56l56.9 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4l0 23.6-48 0 0-24 0-13.5 0-13.9 12.1-6.9 44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1L224 176c-4.4 0-8 3.6-8 8l0 6.5-48 0 0-6.5zm64 184l0-48 48 0 0 48-48 0z" />
    </Icon>
);

export default CircleQuestion;