
import { Icon } from "../../index";

/**
 * A component that renders the `reply-all` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-all?s=light reply-all}
 * @preview ![reply-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/reply-all.svg)
 */
const ReplyAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M202.8 59.8c6.5-5.9 7-16.1 1.1-22.6s-16.1-7-22.6-1.1L24.8 178.4c-17.5 15.9-17.5 43.3 0 59.2L181.2 379.8c6.5 5.9 16.7 5.5 22.6-1.1s5.5-16.7-1.1-22.6L46.3 213.9c-3.5-3.2-3.5-8.7 0-11.8L202.8 59.8zM320 160l80 0c79.5 0 144 64.5 144 144c0 46.1-15.9 79.7-34.1 103.2c1.3-7.1 2.1-14.8 2.1-23.2c0-70.7-57.3-128-128-128l-64 0c0 0 0 0 0 0l-8 0c-13.3 0-24 10.7-24 24l0 8 0 16 0 48L128 208 288 64l0 48 0 16 0 8c0 13.3 10.7 24 24 24l8 0zm0 160l0-16 0-16 32 0 32 0c53 0 96 43 96 96c0 30.4-12.8 47.9-22.2 56.7c-5.5 5.1-9.8 12-9.8 19.5c0 10.9 8.8 19.7 19.7 19.7c2.8 0 5.6-.6 8.1-1.9C494.5 467.9 576 417.3 576 304c0-97.2-78.8-176-176-176l-48 0-32 0 0-16 0-16 0-32c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144C99.8 190.3 96 198.9 96 208s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2l0-32z" />
    </Icon>
);

export default ReplyAll;