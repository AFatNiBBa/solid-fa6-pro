
import { Icon } from "../../index";

/**
 * A component that renders the `box-circle-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-circle-check?s=thin box-circle-check}
 * @preview ![box-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/box-circle-check.svg)
 */
const BoxCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M232 48l110.4 0c19 0 36.2 11.2 43.9 28.5l41.6 93.6c.9 1.9 1.6 3.9 2.2 5.9l-198 0 0-128zM16 192l336 0 80 0 16 0 0-2.4c0-9-1.9-17.8-5.5-26L400.9 70c-10.3-23.1-33.2-38-58.5-38L105.6 32C80.3 32 57.4 46.9 47.1 70L5.5 163.6c-3.6 8.2-5.5 17-5.5 26L0 416c0 35.3 28.7 64 64 64l232.2 0c-4.2-5.1-8.1-10.4-11.8-16L64 464c-26.5 0-48-21.5-48-48l0-224zm200-16L18 176c.6-2 1.3-4 2.2-5.9L61.7 76.5C69.4 59.2 86.6 48 105.6 48L216 48l0 128zm216 64a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm69.7-189.7c-3.1-3.1-8.2-3.1-11.3 0L416 396.7l-42.3-42.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l48 48c3.1 3.1 8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3z" />
    </Icon>
);

export default BoxCircleCheck;