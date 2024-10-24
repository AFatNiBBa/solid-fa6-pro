
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-snowboarding` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-snowboarding?s=duotone person-snowboarding}
 * @preview ![person-snowboarding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-snowboarding.svg)
 */
const PersonSnowboarding: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 312c0 6.1 2.3 12.3 7 17l22.4 22.4c8.7 8.7 19.2 15.5 30.8 20L412.4 506.2c10 3.8 20.7 5.8 31.5 5.8l28.2 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-28.2 0c-4.9 0-9.7-.9-14.3-2.6c-28.8-11-57.6-22.1-86.5-33.1L297.9 411c-53-20.3-106-40.6-159-60.9c-13.1-5-26.1-10-39.2-15c-7.5-2.9-15-5.7-22.4-8.6c-5.2-2-10-5.1-14-9.1L41 295c-9.4-9.4-24.6-9.4-33.9 0c-4.7 4.7-7 10.8-7 17z" />
        <path d="M209.7 3.4c15.8-7.9 35-1.5 42.9 14.3l25 50 42.4 8.5c19.5 3.9 37.8 12.3 53.5 24.5l126.1 98.1c14 10.9 16.5 31 5.6 44.9s-31 16.5-44.9 5.6l-72.1-56.1-71.5 31.8 33.1 27.6c23.2 19.3 33.5 50 26.7 79.4l-17.4 75.2c-2.2 9.4-8.2 16.8-16.1 21L297.9 411c-2.1-5.6-2.6-11.9-1.1-18.2l17.4-75.2c1.4-5.9-.7-12-5.3-15.9l-52.8-44 0 18.8c0 20.7-13.2 39-32.8 45.5L139 350.1l-39.2-15c-.8-1.6-1.5-3.2-2.1-4.9c-5.6-16.8 3.5-34.9 20.2-40.5L192 264.9l0-53.2c0-24.2 13.7-46.4 35.4-57.2l45.2-22.6-7.5-1.5c-19.4-3.9-35.9-16.5-44.7-34.1l-25-50c-7.9-15.8-1.5-35 14.3-42.9zM432 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default PersonSnowboarding;