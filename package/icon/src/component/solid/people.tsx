
import { Icon } from "../../index";

/**
 * A component that renders the `people` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people?s=solid people}
 * @preview ![people](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/people.svg)
 */
const People: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-223.1 28.6 47.5c9.1 15.1 28.8 20 43.9 10.9c9.8-5.9 15.3-16.2 15.5-26.9c.2 10.7 5.7 21 15.5 26.9c15.1 9.1 34.8 4.2 43.9-10.9l33.9-56.3L375 362.9c-3.5 10.4 4.3 21.1 15.2 21.1l17.8 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 16 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 17.8 0c10.9 0 18.6-10.7 15.2-21.1L546.7 248.1l33.9 56.3c9.1 15.1 28.8 20 43.9 10.9s20-28.8 10.9-43.9l-53.6-89.2c-20.2-33.7-56.7-54.3-96-54.3l-11.6 0c-39.3 0-75.7 20.6-96 54.3l-53.6 89.2c-3 5-4.5 10.5-4.6 15.9c-.1-5.4-1.6-10.9-4.6-15.9l-58.3-97c-17.4-28.9-48.6-46.6-82.3-46.6l-29.7 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L88 256.9 88 480c0 17.7 14.3 32 32 32s32-14.3 32-32zM528 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default People;