
import { Icon } from "../../index";

/**
 * A component that renders the `box-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-check?s=thin box-check}
 * @preview ![box-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/box-check.svg)
 */
const BoxCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M232 48l110.4 0c19 0 36.2 11.2 43.9 28.5l41.6 93.6c.9 1.9 1.6 3.9 2.2 5.9l-198 0 0-128zM16 192l416 0 0 224c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-224zm200-16L18 176c.6-2 1.3-4 2.2-5.9L61.7 76.5C69.4 59.2 86.6 48 105.6 48L216 48l0 128zM400.9 70c-10.3-23.1-33.2-38-58.5-38L105.6 32C80.3 32 57.4 46.9 47.1 70L5.5 163.6c-3.6 8.2-5.5 17-5.5 26L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-226.4c0-9-1.9-17.8-5.5-26L400.9 70zM325.7 261.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L192 372.7l-58.3-58.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0l128-128z" />
    </Icon>
);

export default BoxCheck;