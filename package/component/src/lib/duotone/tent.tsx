
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tent` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent?s=duotone tent}
 * @preview ![tent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tent.svg)
 */
const Tent: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M.2 476.5c-.1 1.2-.2 2.4-.2 3.5c0 7.8 2.9 15.4 8.2 21.3C14.2 508.1 22.9 512 32 512l208 0 16 0c17.7 0 32-14.3 32-32l0-182.1c0-5.5 4.4-9.9 9.9-9.9c3.7 0 7.2 2.1 8.8 5.5L407.2 494.3c5.4 10.8 16.5 17.7 28.6 17.7l28.2 0 80 0c9.1 0 17.8-3.9 23.8-10.7c5.3-5.9 8.2-13.5 8.2-21.3c0-1.2-.1-2.4-.2-3.5l-32-288c-1-9-5.8-17.2-13.2-22.5L306.6 6C301 2 294.5 0 288 0s-13 2-18.6 6L45.4 166c-7.4 5.3-12.2 13.5-13.2 22.5l-32 288z" />
        <path d="M435.8 512c-12.1 0-23.2-6.8-28.6-17.7L306.7 293.5c-1.7-3.4-5.1-5.5-8.8-5.5c-5.5 0-9.9 4.4-9.9 9.9L288 480c0 17.7-14.3 32-32 32l179.8 0z" />
    </Icon>
);

export default Tent;