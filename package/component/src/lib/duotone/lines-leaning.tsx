
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lines-leaning` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lines-leaning?s=duotone lines-leaning}
 * @preview ![lines-leaning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lines-leaning.svg)
 */
const LinesLeaning: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 448c0 13.4 8.5 25.9 21.9 30.4c3.4 1.1 6.8 1.7 10.1 1.7c13.4 0 25.9-8.5 30.4-21.9l128-384c5.6-16.8-3.5-34.9-20.2-40.5c-3.4-1.1-6.8-1.7-10.1-1.7c-13.4 0-25.9 8.5-30.4 21.9l-128 384C.5 441.2 0 444.7 0 448zM320 64l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M261.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8l-64 384c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l64-384c2.9-17.4 19.4-29.2 36.8-26.3z" />
    </Icon>
);

export default LinesLeaning;