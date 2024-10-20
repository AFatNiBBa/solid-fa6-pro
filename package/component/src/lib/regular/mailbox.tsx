
import { Icon } from "../../index";

/**
 * A component that renders the `mailbox` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox?s=regular mailbox}
 * @preview ![mailbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mailbox.svg)
 */
const Mailbox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 208c0-53 43-96 96-96s96 43 96 96l0 192L64 400c-8.8 0-16-7.2-16-16l0-176zM240 448l48 0 224 0c35.3 0 64-28.7 64-64l0-176c0-79.5-64.5-144-144-144L144 64C64.5 64 0 128.5 0 208L0 384c0 35.3 28.7 64 64 64l176 0zm48-240c0-36.9-13.9-70.5-36.7-96L432 112c53 0 96 43 96 96l0 176c0 8.8-7.2 16-16 16l-224 0 0-192zM104 192c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm256 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0 0 24c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-16 0-80 0z" />
    </Icon>
);

export default Mailbox;