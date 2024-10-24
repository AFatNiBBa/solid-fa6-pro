
import { Icon } from "../../index";

/**
 * A component that renders the `reply-all` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-all?s=sharp-solid reply-all}
 * @preview ![reply-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/reply-all.svg)
 */
const ReplyAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M106.4 184.4L224 76.6 224 32l-32 0L0 208 192 384l32 0 0-44.6L106.4 231.6 80.6 208l25.7-23.6zM224 120l-72.3 66.3L128 208l23.7 21.7L224 296l96 88 32 0 0-96 16 0c61.9 0 112 50.1 112 112c0 48-32 80-32 80s128-48 128-176c0-97.2-78.8-176-176-176l-48 0 0-96-32 0-96 88z" />
    </Icon>
);

export default ReplyAll;