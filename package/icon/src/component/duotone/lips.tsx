
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lips` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lips?s=duotone lips}
 * @preview ![lips](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lips.svg)
 */
const Lips: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224l64 0c0 7.9 80 96 224 96s224-88.1 224-96l64 0c0 9.2-2.6 19.1-5.3 27.5c-3 9.1-7.4 19.4-12.8 30.3c-10.8 21.7-26.8 46.9-47.7 71.1C468.8 400.9 404.7 448 320 448l-64 0c-84.7 0-148.8-47.1-190.2-95.1C44.9 328.8 29 303.5 18.1 281.8C12.7 271 8.4 260.7 5.3 251.5C2.6 243.1 0 233.2 0 224z" />
        <path d="M297.7 94c-3.4 2.5-6.7 4.9-9.7 7.3c-3-2.4-6.2-4.8-9.7-7.3C260.6 81.2 231.5 64 200 64c-20.3 0-42.8 9.3-61.4 19.2c-20 10.6-41.1 24.7-60.2 39.5c-19.1 14.8-37.1 31.2-50.8 46.5c-6.8 7.6-13.1 15.7-17.9 23.7C5.5 200.2 0 211.2 0 224l64 0c0-7.7 46.3-31.1 138.8-32c3.4 0 6.9 .5 10.1 1.5c13.1 4 49.4 14.4 75.1 14.4s62-10.4 75.1-14.4c3.3-1 6.7-1.6 10.1-1.5c92.5 .9 138.8 24.2 138.8 32l64 0c0-12.8-5.5-23.8-9.7-31c-4.8-8.1-11.1-16.1-17.9-23.7c-13.6-15.3-31.7-31.7-50.8-46.5c-19.1-14.9-40.2-29-60.2-39.5C418.8 73.3 396.3 64 376 64c-31.5 0-60.6 17.2-78.3 30z" />
    </Icon>
);

export default Lips;