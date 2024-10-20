
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-w` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-w?s=duotone square-w}
 * @preview ![square-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-w.svg)
 */
const SquareW: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm72.3 76.2c.2-1.2 .5-2.5 .9-3.6c.8-2.4 1.9-4.6 3.3-6.6c2.9-4 7.1-7.2 12.2-8.8c2.4-.8 4.9-1.1 7.3-1.1c10.2 0 19.6 6.5 22.9 16.7c13.7 42.9 27.4 85.7 41.1 128.6c13.7-42.9 27.4-85.7 41.1-128.6c3.2-9.9 12.4-16.7 22.9-16.7s19.7 6.7 22.9 16.7c13.7 42.9 27.4 85.7 41.1 128.6c13.7-42.9 27.4-85.7 41.1-128.6c3.3-10.2 12.7-16.7 22.9-16.7c2.4 0 4.9 .4 7.3 1.1c10.2 3.3 16.7 12.7 16.7 22.9c0 2.4-.4 4.9-1.1 7.3c-21.3 66.7-42.7 133.3-64 200c-3.2 9.9-12.4 16.7-22.9 16.7s-19.7-6.7-22.9-16.7L224 254.7c-13.7 42.9-27.4 85.7-41.1 128.6c-3.2 9.9-12.4 16.7-22.9 16.7s-19.7-6.7-22.9-16.7c-21.3-66.7-42.7-133.3-64-200c-.4-1.2-.7-2.4-.9-3.7c-.1-.9-.2-1.8-.2-1.8c-.1-.9-.1-.9-.1-1.8c0-.6 0-1.3 .1-1.9s.1-1.2 .2-1.9z" />
        <path d="M88.7 153.1c12.6-4 26.1 2.9 30.2 15.5L160 297.3l41.1-128.6c3.2-9.9 12.4-16.7 22.9-16.7s19.7 6.7 22.9 16.7L288 297.3l41.1-128.6c4-12.6 17.5-19.6 30.2-15.5s19.6 17.5 15.5 30.2l-64 200c-3.2 9.9-12.4 16.7-22.9 16.7s-19.7-6.7-22.9-16.7L224 254.7 182.9 383.3c-3.2 9.9-12.4 16.7-22.9 16.7s-19.7-6.7-22.9-16.7l-64-200c-4-12.6 2.9-26.1 15.5-30.2z" />
    </Icon>
);

export default SquareW;