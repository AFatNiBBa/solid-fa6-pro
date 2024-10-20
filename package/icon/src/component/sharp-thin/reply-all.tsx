
import { Icon } from "../../index";

/**
 * A component that renders the `reply-all` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-all?s=sharp-thin reply-all}
 * @preview ![reply-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/reply-all.svg)
 */
const ReplyAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 480s13.1-4.9 30.8-15.7C516.7 441.2 576 391.1 576 304c0-97.2-78.8-176-176-176l-64 0-16 0 0-16 0-64 0-16-16 0-16 0L107.8 197.1 96 208l11.8 10.9L288 384l16 0 16 0 0-16 0-64 0-16 16 0 32 0c61.9 0 112 50.1 112 112c0 21.2-6.2 39.2-13.2 52.8C458 470 448 480 448 480zm53.5-52c-3.7 3.2-7.4 6.2-11 9c3.3-11 5.6-23.4 5.6-37c0-70.7-57.3-128-128-128l-48 0-16 0 0 16 0 80-9.8 0L119.7 208 294.2 48l9.8 0 0 80 0 16 16 0 80 0c88.4 0 160 71.6 160 160c0 58-28.8 97.9-58.5 124zM197.4 59.9l5.9-5.4L192.5 42.7l-5.9 5.4-168 154L12.2 208l6.4 5.9 168 154 5.9 5.4 10.8-11.8-5.9-5.4L35.8 208 197.4 59.9z" />
    </Icon>
);

export default ReplyAll;