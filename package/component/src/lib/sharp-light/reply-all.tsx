
import { Icon } from "../../index";

/**
 * A component that renders the `reply-all` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-all?s=sharp-light reply-all}
 * @preview ![reply-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/reply-all.svg)
 */
const ReplyAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M202.8 65.8L214.6 55 193 31.4 181.2 42.2l-168 154L.3 208l12.9 11.8 168 154L193 384.6 214.6 361l-11.8-10.8L47.7 208 202.8 65.8zM448 480s27-10.1 56.2-33.4C538.5 419.1 576 373.2 576 304c0-97.2-78.8-176-176-176l-48 0-32 0 0-32 0-32 0-32-32 0L119.7 186.3 96 208l23.7 21.7L288 384l32 0 0-32 0-32 0-32 32 0 16 0c61.9 0 112 50.1 112 112c0 9.9-1.3 19-3.5 27.4C468.2 459.8 448 480 448 480zm96-176c0 38.2-13.9 67.8-32.1 90.3C508.9 317.4 445.6 256 368 256l-48 0-32 0 0 32 0 52.6L143.4 208 288 75.4l0 52.6 0 32 32 0 80 0c79.5 0 144 64.5 144 144z" />
    </Icon>
);

export default ReplyAll;