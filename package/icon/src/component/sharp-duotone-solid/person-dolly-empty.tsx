
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-dolly-empty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dolly-empty?s=sharp-duotone-solid person-dolly-empty}
 * @preview ![person-dolly-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-dolly-empty.svg)
 */
const PersonDollyEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M194.9 174.5l46.6-11.6 5.8 23.3 49.6 198.4c17.6 2.4 32.9 12 42.9 25.7l134.4-33.6 23.3-5.8 11.6 46.6-23.3 5.8L351.4 456.9C347.1 488 320.3 512 288 512c-35.3 0-64-28.7-64-64c0-21.3 10.4-40.1 26.3-51.7L223.3 288c-5.3-21.3-10.7-42.7-16-64c-2.2-8.7-4.4-17.5-6.5-26.2l-5.8-23.3zM272 448a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M80 96A48 48 0 1 0 80 0a48 48 0 1 0 0 96zM0 480l0 32 64 0 0-32s0 0 0 0l0-69.5-64-64L0 480zM32 128L0 128l0 32L0 274.7c0 17 6.7 33.3 18.7 45.3l22.6 22.6 56.7 56.7 6.3 37.9 4 24 4 24s0 0 0 0l4 24 .5 2.7 64.9 0-2.2-13.3-4-24s0 0 0 0l-4-24-4-24-8-48-1.7-10.1-7.3-7.3L96 306.7l0-65.1 21.4 32.1 9.5 14.3 17.1 0 79.3 0-16-64-46.1 0-54.5-81.7L97.1 128 80 128l-48 0z" />
    </Icon>
);

export default PersonDollyEmpty;