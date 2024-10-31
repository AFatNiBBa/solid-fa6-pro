
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-military-rifle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-military-rifle?s=duotone person-military-rifle}
 * @preview ![person-military-rifle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-military-rifle.svg)
 */
const PersonMilitaryRifle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M149.7 249.5c8.6-6.4 18-11.8 27.9-16c58.1 83 116.2 166 174.3 248.9c-1.4 12.1-9.6 22.2-20.7 26.2c-60.5-86.4-120.9-172.8-181.4-259.2zM176 110.6c0-11.4 2.4-22.2 6.7-32l146.7 0c4.3 9.8 6.7 20.6 6.7 32c0 44.2-35.8 80-80 80s-80-35.8-80-80zM327.7 230.8L421.9 67.7c-7.7-4.4-10.3-14.2-5.9-21.9s14.2-10.3 21.9-5.9l13.9 8 13.9 8c7.7 4.4 10.3 14.2 5.9 21.9L416 173.9l1.6 .9c15.3 8.8 20.6 28.4 11.7 43.7l-30.4 52.7c-1.9 3.2-4.2 6-6.9 8.3c-16.1-22.6-38.6-39.5-64.2-48.8z" />
        <path d="M178.1 19.5L334.1 .8C343.6-.4 352 7.1 352 16.6l0 46c0 8.8-7.2 16-16 16l-154.3 0c-16.4 0-29.7-13.3-29.7-29.7c0-15 11.2-27.7 26.1-29.5zM113.7 289.4c9.4-15.8 21.7-29.3 36-40L331.1 508.6c-3.5 1.3-7.2 2-11.1 2l-128 0c-17.7 0-32-14.3-32-32l0-110.3L106.4 459C95.2 478 70.7 484.3 51.7 473s-25.3-35.8-14.1-54.8l76.1-128.8zM352 478.6c0 1.3-.1 2.5-.2 3.8L177.5 233.5c16.6-7.1 34.6-10.9 53.3-10.9l50.4 0c48.1 0 92.6 25.4 117.1 66.8l76.1 128.8c11.2 19 4.9 43.5-14.1 54.8s-43.5 4.9-54.8-14.1L352 368.3l0 110.3zm-56-160a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default PersonMilitaryRifle;