
import { Icon } from "../../index";

/**
 * A component that renders the `mailbox` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox?s=light mailbox}
 * @preview ![mailbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mailbox.svg)
 */
const Mailbox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 208l0 176c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-176c0-61.9-50.1-112-112-112S32 146.1 32 208zm256 0l0 176c0 11.7-3.1 22.6-8.6 32L512 416c17.7 0 32-14.3 32-32l0-176c0-61.9-50.1-112-112-112L234.5 96c32.6 26.4 53.5 66.8 53.5 112zM64 448c-35.3 0-64-28.7-64-64L0 208C0 128.5 64.5 64 144 64l288 0c79.5 0 144 64.5 144 144l0 176c0 35.3-28.7 64-64 64l-288 0L64 448zm48-256l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm224 0l96 0 56 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-72-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 96l32 0 0-64-32 0 0 64z" />
    </Icon>
);

export default Mailbox;