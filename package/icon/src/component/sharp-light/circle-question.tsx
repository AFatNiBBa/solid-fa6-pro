
import { Icon } from "../../index";

/**
 * A component that renders the `circle-question` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-question?s=sharp-light circle-question}
 * @preview ![circle-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-question.svg)
 */
const CircleQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm168-72c0-30.9 25.1-56 56-56l56 0c35.5 0 64 29 64 64.3c0 24-13.4 46.2-34.9 57.2L272 268.3l0 3.7 0 16-32 0 0-16 0-13.5 0-9.8 8.7-4.5 45.8-23.4c10.7-5.4 17.5-16.6 17.5-28.7c0-17.8-14.4-32.3-32-32.3l-56 0c-13.3 0-24 10.7-24 24l0 8-32 0 0-8zm64 136l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default CircleQuestion;