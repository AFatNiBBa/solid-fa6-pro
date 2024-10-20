
import { Icon } from "../../index";

/**
 * A component that renders the `question` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/question?s=light question}
 * @preview ![question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/question.svg)
 */
const Question: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M144 64c-53 0-96 43-96 96c0 8.8-7.2 16-16 16s-16-7.2-16-16C16 89.3 73.3 32 144 32l32 0c70.7 0 128 57.3 128 128c0 35.3-16.6 68.4-44.8 89.6l-60.8 45.6C184.3 305.8 176 322.4 176 340l0 12c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-12c0-27.7 13-53.8 35.2-70.4L240 224c20.1-15.1 32-38.8 32-64c0-53-43-96-96-96l-32 0zm-8 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Question;