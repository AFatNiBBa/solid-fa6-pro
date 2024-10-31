
import { Icon } from "../../index";

/**
 * A component that renders the `mailbox` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox?s=sharp-light mailbox}
 * @preview ![mailbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mailbox.svg)
 */
const Mailbox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 208l0 208 224 0 0-208c0-61.9-50.1-112-112-112S32 146.1 32 208zm256 0l0 208 256 0 0-208c0-61.9-50.1-112-112-112L234.5 96c32.6 26.4 53.5 66.8 53.5 112zM0 208C0 128.5 64.5 64 144 64l288 0c79.5 0 144 64.5 144 144l0 208 0 32-32 0-256 0-32 0L32 448 0 448l0-32L0 208zm112-16l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0zm224 0l96 0 64 0 16 0 0 16 0 96 0 16-16 0-64 0-16 0 0-16 0-80-80 0-16 0 0-32 16 0zm112 96l32 0 0-64-32 0 0 64z" />
    </Icon>
);

export default Mailbox;