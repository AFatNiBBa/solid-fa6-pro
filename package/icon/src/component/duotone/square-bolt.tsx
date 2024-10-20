
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-bolt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-bolt?s=duotone square-bolt}
 * @preview ![square-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-bolt.svg)
 */
const SquareBolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM112.9 261.3c-2.2-6.4-.2-13.5 5.1-17.8l160-128c2.9-2.3 6.5-3.5 10-3.5c3.6 0 7.1 1.2 10.1 3.6c5.8 4.7 7.6 12.9 4.3 19.6L249.9 240l70.1 0c6.8 0 12.9 4.3 15.1 10.7s.2 13.5-5.1 17.8l-160 128c-2.9 2.3-6.5 3.5-10 3.5c-3.6 0-7.1-1.2-10.1-3.6c-5.8-4.7-7.6-12.9-4.3-19.6L198.1 272 128 272c-6.8 0-12.8-4.3-15.1-10.7z" />
        <path d="M302.3 135.2c3.4-6.7 1.6-14.9-4.3-19.6s-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7l70.1 0L145.7 376.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7l-70.1 0 52.4-104.8z" />
    </Icon>
);

export default SquareBolt;