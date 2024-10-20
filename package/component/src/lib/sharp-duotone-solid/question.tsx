
import { Icon, generic } from "../../index";

/**
 * A component that renders the `question` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/question?s=sharp-duotone-solid question}
 * @preview ![question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/question.svg)
 */
const Question: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M120 440a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M144 96c-35.3 0-64 28.7-64 64l0 16-64 0 0-16C16 89.3 73.3 32 144 32l32 0c70.7 0 128 57.3 128 128l0 9.3c0 39.3-18 76.4-48.9 100.6L192 319.6l0 32.4-64 0 0-48 0-15.6 12.2-9.6 75.3-59.2C231 207.5 240 189 240 169.3l0-9.3c0-35.3-28.7-64-64-64l-32 0z" />
    </Icon>
);

export default Question;