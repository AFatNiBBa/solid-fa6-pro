
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mailbox` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mailbox?s=duotone mailbox}
 * @preview ![mailbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mailbox.svg)
 */
const Mailbox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M144 64c79.5 0 144 64.5 144 144l0 176c0 35.3-28.7 64-64 64l288 0c35.3 0 64-28.7 64-64l0-176c0-79.5-64.5-144-144-144L144 64zM384 208c0-8.8 7.2-16 16-16l64 0 32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16z" />
        <path d="M0 208C0 128.5 64.5 64 144 64s144 64.5 144 144l0 176c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 208zm64 0c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 192c-8.8 0-16 7.2-16 16zm336-16l64 0 32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default Mailbox;