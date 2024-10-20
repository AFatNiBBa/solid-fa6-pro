
import { Icon, generic } from "../../index";

/**
 * A component that renders the `inbox-out` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-out?s=duotone inbox-out}
 * @preview ![inbox-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/inbox-out.svg)
 */
const InboxOut: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 368l0 96c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-76.2 0c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7l-120.4 0c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7L48 320c-26.5 0-48 21.5-48 48z" />
        <path d="M256 320c17.7 0 32-14.3 32-32l0-178.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 224 288c0 17.7 14.3 32 32 32z" />
    </Icon>
);

export default InboxOut;