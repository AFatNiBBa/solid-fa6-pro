
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-pants` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-pants?s=duotone people-pants}
 * @preview ![people-pants](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/people-pants.svg)
 */
const PeoplePants: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm320 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M59.4 304.5L88 256.9 88 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-223.1 28.6 47.5c9.1 15.1 28.8 20 43.9 10.9c9.8-5.9 15.3-16.2 15.5-26.9c.2 10.7 5.7 21 15.5 26.9c15.1 9.1 34.8 4.2 43.9-10.9L408 256.9 408 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-223.1 28.6 47.5c9.1 15.1 28.8 20 43.9 10.9s20-28.8 10.9-43.9l-58.3-97c-17.4-28.9-48.6-46.6-82.3-46.6l-29.7 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-3 5-4.5 10.5-4.6 15.9c-.1-5.4-1.6-10.9-4.6-15.9l-58.3-97c-17.4-28.9-48.6-46.6-82.3-46.6l-29.7 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9z" />
    </Icon>
);

export default PeoplePants;