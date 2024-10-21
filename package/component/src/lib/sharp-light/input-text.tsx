
import { Icon } from "../../index";

/**
 * A component that renders the `input-text` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-text?s=sharp-light input-text}
 * @preview ![input-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/input-text.svg)
 */
const InputText: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 96l0 320 24 0 256 0 296 0 0-320L312 96 56 96 32 96zm89.3 256l-34.6 0 2.5-6.1 72-176 4.1-9.9 21.5 0 4.1 9.9 72 176 2.5 6.1-34.6 0-13.1-32.1c-.5 .1-1.1 .1-1.6 .1l-80 0c-.5 0-1.1 0-1.6-.1L121.3 352zM288 352l0-16 0-16 0-64 0-64 0-16 0-16 16 0 8 0 48 0c30.9 0 56 25.1 56 56c0 12.1-3.8 23.3-10.4 32.5C421.5 258.4 432 276 432 296c0 30.9-25.1 56-56 56l-64 0-8 0-16 0zM0 64l32 0 576 0 32 0 0 32 0 320 0 32-32 0L32 448 0 448l0-32L0 96 0 64zM176 218.3L147.5 288l57.1 0L176 218.3zM360 272l-40 0 0 48 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0zm0-32c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0 48 40 0z" />
    </Icon>
);

export default InputText;