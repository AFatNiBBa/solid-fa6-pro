
import { Icon } from "../../index";

/**
 * A component that renders the `mailbox` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox?s=thin mailbox}
 * @preview ![mailbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mailbox.svg)
 */
const Mailbox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M272 384c0 26.5-21.5 48-48 48L64 432c-26.5 0-48-21.5-48-48l0-176C16 137.3 73.3 80 144 80s128 57.3 128 128l0 176zm16-176c0-55.7-31.7-104.1-78-128l222 0c70.7 0 128 57.3 128 128l0 176c0 26.5-21.5 48-48 48l-245.7 0c13.3-11.7 21.7-28.9 21.7-48l0-176zM64 448l160 0 288 0c35.3 0 64-28.7 64-64l0-176c0-79.5-64.5-144-144-144L144 64C64.5 64 0 128.5 0 208L0 384c0 35.3 28.7 64 64 64zm8-256c-4.4 0-8 3.6-8 8s3.6 8 8 8l144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 192zm304 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 64c0 13.3 10.7 24 24 24l32 0c13.3 0 24-10.7 24-24l0-56c0-13.3-10.7-24-24-24l-48 0-64 0zm72 80l0-64 40 0c4.4 0 8 3.6 8 8l0 56c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Mailbox;