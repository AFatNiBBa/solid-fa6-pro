
import { Icon } from "../../index";

/**
 * A component that renders the `square-question` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-question?s=sharp-regular square-question}
 * @preview ![square-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-question.svg)
 */
const SquareQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 352 352 0 0-352L48 80zM0 32l48 0 352 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM136 184c0-30.9 25.1-56 56-56l56.9 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L248 264.4l0 7.6 0 24-48 0 0-24 0-21.5 0-13.9 12.1-6.9 44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1L192 176c-4.4 0-8 3.6-8 8l0 6.5-48 0 0-6.5zm64 152l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default SquareQuestion;