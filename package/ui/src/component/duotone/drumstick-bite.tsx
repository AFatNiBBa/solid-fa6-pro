
import { Icon, generic } from "../../index";

/**
 * A component that renders the `drumstick-bite` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drumstick-bite?s=duotone drumstick-bite}
 * @preview ![drumstick-bite](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/drumstick-bite.svg)
 */
const DrumstickBite: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 380c0 33.1 26.9 60 60 60c6.3 0 12 5.7 12 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5c-4.2-16.9-5.2-37.1 7.2-49.4l36.4-36.4c-39.2-3-70.5-34.3-73.5-73.5l-36.4 36.4c-12.3 12.3-32.5 11.4-49.4 7.2C69.8 320.6 65 320 60 320c-33.1 0-60 26.9-60 60z" />
        <path d="M160 272l0-96C160 78.8 238.8 0 336 0c86.5 0 158.5 62.5 173.2 144.8c2.1 11.8-10.3 20.1-22 17.6c-7.5-1.6-15.3-2.4-23.2-2.4c-61.9 0-112 50.1-112 112c0 19.2 4.8 37.2 13.3 53c5.7 10.5 1.1 24.8-10.8 26c-6.1 .6-12.3 1-18.5 1l-96 0c-44.2 0-80-35.8-80-80z" />
    </Icon>
);

export default DrumstickBite;