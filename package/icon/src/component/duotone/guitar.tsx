
import { Icon, generic } from "../../index";

/**
 * A component that renders the `guitar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/guitar?s=duotone guitar}
 * @preview ![guitar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/guitar.svg)
 */
const Guitar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M28.8 283.6C-16 328.4-7.6 409.4 47.5 464.5C78.8 495.8 118.4 512 155 512c27.9 0 54-9.4 73.4-28.8c17.9-17.9 27.4-41.7 28.6-67.3c.9-17 15-32.3 31.6-36.1c15-3.4 28.6-10.5 39.6-21.4c16-16 23.7-37.7 23.7-61c0-23-7.5-47.6-22.2-70c-24.6 24.6-49.3 49.3-73.9 73.9c0 .9 .1 1.8 .1 2.7c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48c.9 0 1.8 0 2.7 .1c24.6-24.6 49.3-49.3 73.9-73.9c-45.1-29.4-99.3-30.2-131 1.6c-11 11-18 24.6-21.4 39.6c-3.7 16.6-19.1 30.7-36.1 31.6c-25.6 1.3-49.3 10.7-67.3 28.6z" />
        <path d="M431 7c9.4-9.4 24.6-9.4 33.9 0l40 40c9.4 9.4 9.4 24.6 0 33.9l-48 48c-2.4 2.4-5.3 4.3-8.5 5.5l-41 15.4L255.9 301.3c-1.3-24.4-20.9-43.9-45.3-45.3L362.1 104.6l15.4-41c1.2-3.2 3.1-6.1 5.5-8.5L431 7z" />
    </Icon>
);

export default Guitar;