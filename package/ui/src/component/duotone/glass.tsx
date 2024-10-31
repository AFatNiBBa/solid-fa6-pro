
import { Icon, generic } from "../../index";

/**
 * A component that renders the `glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass?s=duotone glass}
 * @preview ![glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/glass.svg)
 */
const Glass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32c0 .8 0 1.5 .1 2.3L28.9 437.7c3 41.9 37.8 74.3 79.8 74.3l166.6 0c42 0 76.8-32.4 79.8-74.3L383.9 34.3c.1-.8 .1-1.5 .1-2.3c0-8.1-3-15.9-8.6-21.8C369.4 3.7 360.9 0 352 0L32 0C23.1 0 14.6 3.7 8.6 10.2C3 16.1 0 23.9 0 32zM66.4 64l251.3 0c-1.5 21.3-3 42.7-4.6 64c-7.3 101.7-14.5 203.4-21.8 305.1c-.6 8.4-7.6 14.9-16 14.9l-166.6 0c-8.4 0-15.4-6.5-16-14.9C85.5 331.4 78.2 229.7 70.9 128c-1.5-21.3-3-42.7-4.6-64z" />
        <path d="M313.1 128L70.9 128 92.7 433.1c.6 8.4 7.6 14.9 16 14.9l166.6 0c8.4 0 15.4-6.5 16-14.9L313.1 128z" />
    </Icon>
);

export default Glass;