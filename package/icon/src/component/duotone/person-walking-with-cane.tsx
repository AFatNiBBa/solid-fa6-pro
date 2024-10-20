
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-walking-with-cane` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-walking-with-cane?s=duotone person-walking-with-cane}
 * @preview ![person-walking-with-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-walking-with-cane.svg)
 */
const PersonWalkingWithCane: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M332.6 334.3c5.7-1.5 11.2-4.2 16.2-7.9c4-3 7.4-6.5 10.1-10.3L477.2 486.9c1.9 2.8 2.8 6 2.8 9.1c0 5.1-2.4 10.1-6.9 13.2c-7.3 5-17.2 3.2-22.3-4L332.6 334.3z" />
        <path d="M128 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM81.7 181.1C98 148.5 131.2 128 167.6 128l24.4 0c30.2 0 58.7 14.2 76.8 38.4l76.8 102.4c10.6 14.1 7.7 34.2-6.4 44.8s-34.2 7.7-44.8-6.4L224 213.3l0 93.4 49.9 49.9c9 9 14.1 21.2 14.1 33.9l0 89.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L146.7 320c-12-12-18.7-28.3-18.7-45.3l0-43.2L92.6 302.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l46.3-92.6zM97 472.2l31.4-125.4 52.8 52.8-22 88.2c-4.3 17.1-21.7 27.6-38.8 23.3s-27.6-21.7-23.3-38.8z" />
    </Icon>
);

export default PersonWalkingWithCane;