
import { Icon, generic } from "../../index";

/**
 * A component that renders the `swords` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swords?s=duotone swords}
 * @preview ![swords](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/swords.svg)
 */
const Swords: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.3 19.1L14.4 89.6c1.9 9.3 6.4 17.8 13.1 24.5L329.4 416 416 329.4 114.2 27.5c-6.7-6.7-15.2-11.3-24.5-13.1L19.1 .3C13.9-.7 8.5 .9 4.7 4.7S-.7 13.9 .3 19.1zM96 329.4c28.9 28.9 57.7 57.7 86.6 86.6l50.7-50.7-86.6-86.6L96 329.4zM278.6 146.7l86.6 86.6L484.5 114.2c6.7-6.7 11.3-15.2 13.1-24.5l14.1-70.5c.2-1 .3-2.1 .3-3.1c0-4.2-1.7-8.3-4.7-11.3c-3.8-3.8-9.2-5.4-14.5-4.4L422.4 14.4c-9.3 1.9-17.8 6.4-24.5 13.1L278.6 146.7z" />
        <path d="M75.3 308.7c-6.2-6.2-16.4-6.2-22.6 0l-16 16c-4.7 4.7-6 11.8-3.3 17.8l27.5 62L4.7 460.7c-6.2 6.2-6.2 16.4 0 22.6l24 24c6.2 6.2 16.4 6.2 22.6 0l56.2-56.2 62 27.5c6 2.7 13.1 1.4 17.8-3.3l16-16c6.2-6.2 6.2-16.4 0-22.6l-128-128zm361.4 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6l16 16c4.7 4.7 11.8 6 17.8 3.3l62-27.5 56.2 56.2c6.2 6.2 16.4 6.2 22.6 0l24-24c6.2-6.2 6.2-16.4 0-22.6l-56.2-56.2 27.5-62c2.7-6.1 1.4-13.1-3.3-17.8l-16-16c-6.2-6.2-16.4-6.2-22.6 0z" />
    </Icon>
);

export default Swords;