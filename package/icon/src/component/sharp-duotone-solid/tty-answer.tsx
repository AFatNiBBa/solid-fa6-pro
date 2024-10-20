
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tty-answer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tty-answer?s=sharp-duotone-solid tty-answer}
 * @preview ![tty-answer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tty-answer.svg)
 */
const TtyAnswer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 0l0 64 64 0 0-64L288 0zm0 192l0 64 64 0 0-64-64 0zm48-96l0 64 64 0 0-64-64 0zM384 0l0 64 64 0 0-64L384 0zm0 192l0 64 160 0 0-64-160 0zm48-96l0 64 64 0 0-64-64 0zM480 0l0 64 64 0 0-64L480 0zm48 96l0 64 64 0 0-64-64 0zM576 0l0 64 64 0 0-64L576 0zm0 192l0 64 64 0 0-64-64 0z" />
        <path d="M0 32L144 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L368 288l144 80L480 512H448C200.6 512 0 311.4 0 64L0 32z" />
    </Icon>
);

export default TtyAnswer;