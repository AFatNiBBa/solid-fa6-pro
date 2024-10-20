
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-left-and-up-right-to-center` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left-and-up-right-to-center?s=duotone down-left-and-up-right-to-center}
 * @preview ![down-left-and-up-right-to-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/down-left-and-up-right-to-center.svg)
 */
const DownLeftAndUpRightToCenter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 456c0 6.1 2.3 12.3 7 17l32 32c9.4 9.4 24.6 9.4 33.9 0l87-87 39 39c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-144c0-13.3-10.7-24-24-24L72 272c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l39 39L7 439c-4.7 4.7-7 10.8-7 17z" />
        <path d="M473 7c-9.4-9.4-24.6-9.4-33.9 0l-87 87L313 55c-6.9-6.9-17.2-8.9-26.2-5.2S272 62.3 272 72l0 144c0 13.3 10.7 24 24 24l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-39-39 87-87c9.4-9.4 9.4-24.6 0-33.9L473 7z" />
    </Icon>
);

export default DownLeftAndUpRightToCenter;