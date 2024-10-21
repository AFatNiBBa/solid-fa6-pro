
import { Icon } from "../../index";

/**
 * A component that renders the `reply-all` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-all?s=sharp-regular reply-all}
 * @preview ![reply-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/reply-all.svg)
 */
const ReplyAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M106.4 184.4L224 76.6 224 32l-32 0L0 208 192 384l32 0 0-44.6L106.4 231.6 80.6 208l25.7-23.6zM448 480s41.8-15.7 77.7-53c26.9-28 50.3-68.1 50.3-123c0-97.2-78.8-176-176-176l-48 0 0-48 0-12.2 0-.9L352 32l-32 0L304 46.7 163.5 175.4 128 208l35.5 32.6L304 369.3 320 384l32 0 0-34.9 0-.9 0-12.2 0-48 16 0c11.1 0 21.9 1.6 32 4.6c46.3 13.8 80 56.6 80 107.4c0 1.4 0 2.9-.1 4.3C478.1 449.9 448 480 448 480zm80-176c0 17-3.1 32-8.2 45.4C498.6 285.8 438.7 240 368 240l-16 0-48 0 0 48 0 16.2L199 208l105-96.2 0 16.2 0 48 48 0 48 0c70.7 0 128 57.3 128 128z" />
    </Icon>
);

export default ReplyAll;