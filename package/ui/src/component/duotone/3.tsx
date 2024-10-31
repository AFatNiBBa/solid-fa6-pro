
import { Icon, generic } from "../../index";

/**
 * A component that renders the `3` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/3?s=duotone 3}
 * @preview ![3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/3.svg)
 */
const $3: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 46.3 14.3 32 32 32l240 0c13.2 0 25 8.1 29.8 20.4s1.5 26.3-8.2 35.2L162.3 208l21.7 0c75.1 0 136 60.9 136 136s-60.9 136-136 136l-78.6 0C63 480 24.2 456 5.3 418.1l-1.9-3.8c-7.9-15.8-1.5-35 14.3-42.9s35-1.5 42.9 14.3l1.9 3.8c8.1 16.3 24.8 26.5 42.9 26.5l78.6 0c39.8 0 72-32.2 72-72s-32.2-72-72-72L80 272c-13.2 0-25-8.1-29.8-20.4s-1.5-26.3 8.2-35.2L189.7 96 32 96C14.3 96 0 81.7 0 64z" />
    </Icon>
);

export default $3;