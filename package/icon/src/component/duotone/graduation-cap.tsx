
import { Icon, generic } from "../../index";

/**
 * A component that renders the `graduation-cap` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/graduation-cap?s=duotone graduation-cap}
 * @preview ![graduation-cap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/graduation-cap.svg)
 */
const GraduationCap: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M.9 453.4c1.8 5 6 8.9 11.2 10.2l64 16c1.3 .3 2.6 .5 3.9 .5c3 0 6-.8 8.6-2.5c3.7-2.3 6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7c-3.2-14-7.5-28.3-13.4-41.5c1.9-37 19.2-70.9 46.7-94.2c11.5-9.7 24.7-17.6 39.3-23.1c53.1-19.9 106.3-39.9 159.4-59.8c8.3-3.1 12.5-12.3 9.4-20.6s-12.3-12.5-20.6-9.4c-53.2 19.9-106.3 39.9-159.4 59.8c-23.9 9-44.9 23.1-61.7 40.9c-27.2 28.7-43.7 66.7-45.1 107.7c-.1 .6-.1 1.2-.1 1.8c0 28.4-10.8 57.8-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4z" />
        <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l77.4 27.9c16.8-17.8 37.8-31.9 61.7-40.9l159.4-59.8c8.3-3.1 17.5 1.1 20.6 9.4s-1.1 17.5-9.4 20.6L166.2 199.6c-14.6 5.5-27.8 13.4-39.3 23.1l169.5 61.2c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
    </Icon>
);

export default GraduationCap;