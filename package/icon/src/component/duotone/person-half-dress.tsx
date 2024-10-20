
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-half-dress` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-half-dress?s=duotone person-half-dress}
 * @preview ![person-half-dress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-half-dress.svg)
 */
const PersonHalfDress: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M160 0c26.5 0 48 21.5 48 48s-21.5 48-48 48c0-32 0-64 0-96zm0 128l14.9 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c3.1 5.2 4.6 10.8 4.6 16.5c0 10.9-5.5 21.5-15.5 27.5c-15.1 9.1-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-8 0 0-224z" />
        <path d="M160 96l0-96s0 0 0 0c-26.5 0-48 21.5-48 48s21.5 48 48 48c0 0 0 0 0 0zm0 32l-5.8 0c-39.3 0-75.7 20.6-96 54.3L4.6 271.5c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9l33.9-56.3L55 362.9C51.6 373.3 59.3 384 70.2 384L88 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 8 0 0-256z" />
    </Icon>
);

export default PersonHalfDress;