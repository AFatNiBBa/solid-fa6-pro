
import { Icon } from "../../index";

/**
 * A component that renders the `seal-question` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seal-question?s=sharp-solid seal-question}
 * @preview ![seal-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/seal-question.svg)
 */
const SealQuestion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0l75 75 106 0 0 106 75 75-75 75 0 106-106 0-75 75-75-75L75 437l0-106L0 256l75-75L75 75l106 0L256 0zM168 184l0 6.5 48 0 0-6.5c0-4.4 3.6-8 8-8l56.9 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4L232 236.6l0 13.9 0 21.5 0 24 48 0 0-24 0-7.6 32.3-18.5c12.4-7.1 21.7-18 27-30.8l4.7 0 0-24c0-34.9-28.3-63.1-63.1-63.1L224 128c-30.9 0-56 25.1-56 56zm64 152l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default SealQuestion;