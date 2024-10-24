
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-shelter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-shelter?s=duotone person-shelter}
 * @preview ![person-shelter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-shelter.svg)
 */
const PersonShelter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M130.9 340.6c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L200 313.5 200 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-88 16 0 0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-174.5 26.9 49.9c6.3 11.7 20.8 16 32.5 9.8c8.1-4.3 12.6-12.6 12.6-21.2c0-3.8-.9-7.7-2.9-11.4l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3l-19.5 0c-32.4 0-62.1 17.8-77.5 46.3l-37.9 70.3zM216 168a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l224 128c10 5.7 16.1 16.3 16.1 27.8l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-301.4L256 68.9 64 178.6 64 480c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 160c0-11.5 6.2-22.1 16.1-27.8l224-128z" />
    </Icon>
);

export default PersonShelter;