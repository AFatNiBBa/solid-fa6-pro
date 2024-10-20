
import { Icon } from "../../index";

/**
 * A component that renders the `hand-peace` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-peace?s=sharp-thin hand-peace}
 * @preview ![hand-peace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hand-peace.svg)
 */
const HandPeace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M205.2 3.3l8 .8 79.6 8.2 8 .8-.8 8-4.1 39.8L283 184l77 0 8 0 0 8 0 8 72 0 8 0 0 8 0 72 0 64 0 8 0 8c0 83.9-68.1 152-152 152l-80 0c-83.9 0-152-68.1-152-152l0-96 0-8 8 0 24.3 0L48.4 93.6 37 55.2l-2.3-7.7 7.7-2.3 76.7-22.7 7.7-2.3 2.3 7.7 11.3 38.4 43.1 146.1L200.3 51.1l4.1-39.8 .8-8zM113 256l66.7 0-.1-.2-5-16.9-49.6-168L116 40.2 54.6 58.4l9.1 30.7L113 256zm82.1 0l64.3 0L279.8 59.3l3.3-31.8-63.7-6.6-3.3 31.8L195.3 254.4l-.2 1.6zM432 216l-64 0 0 120 64 0 0-56 0-64zM368 352l-8 0-8 0-64 0-8 0-8 0-104 0-8 0 0-16 8 0 104 0 0-64L80 272l0 88c0 75.1 60.9 136 136 136l80 0c75.1 0 136-60.9 136-136l0-8-64 0zm-16-16l0-128 0-8-64 0 0 56 0 8 0 72 64 0z" />
    </Icon>
);

export default HandPeace;