
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thumbs-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-up?s=duotone thumbs-up}
 * @preview ![thumbs-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/thumbs-up.svg)
 */
const ThumbsUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 247.1l0 24.9 0 48 0 38.3c0 32.1 16 62.1 42.7 79.9l38.5 25.7c15.8 10.5 34.3 16.1 53.3 16.1l97.5 0c26.5 0 48-21.5 48-48c0-3.6-.4-7-1.1-10.4c19.2-6.3 33.1-24.3 33.1-45.6c0-9.1-2.5-17.6-6.9-24.9c22.2-4.2 38.9-23.7 38.9-47.1c0-15.1-7-28.6-17.9-37.4c15.4-8 25.9-24.1 25.9-42.6c0-26.5-21.5-48-48-48l-144 0c13.7-23.1 23.5-48.5 28.8-75.2l2.3-11.4c5.2-26-11.7-51.3-37.7-56.5c-3.2-.6-6.3-.9-9.5-.9c-22.4 0-42.5 15.8-47 38.6L254.6 82c-6.6 33.2-24.8 63-51.2 84.2l-7.4 5.9c-22.8 18.2-36 45.8-36 75z" />
        <path d="M0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224z" />
    </Icon>
);

export default ThumbsUp;