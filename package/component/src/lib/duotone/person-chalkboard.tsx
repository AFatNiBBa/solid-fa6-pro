
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-chalkboard` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-chalkboard?s=duotone person-chalkboard}
 * @preview ![person-chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-chalkboard.svg)
 */
const PersonChalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 288c0 10.9 5.5 21.5 15.5 27.5c15.1 9.1 34.8 4.2 43.9-10.9L120 256.9 120 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-288 56 0 64 0 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0-64 0-76.9 0-65.9 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97C33.5 276.7 32 282.4 32 288zM144 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M384 128l0-64 192 0 0 192-192 0 0-64-64 0 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L368 0c-26.5 0-48 21.5-48 48l0 80 64 0z" />
    </Icon>
);

export default PersonChalkboard;