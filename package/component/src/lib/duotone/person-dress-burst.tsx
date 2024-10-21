
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-dress-burst` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress-burst?s=duotone person-dress-burst}
 * @preview ![person-dress-burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-dress-burst.svg)
 */
const PersonDressBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M4 219.6c0 1.2 .1 2.4 .4 3.6c1.5 6.4 6.7 11.2 13.1 12.2l78.7 12.2L90.6 327c-.5 6.5 3.1 12.7 9 15.5s12.9 1.8 17.8-2.6L176 286.1l58.6 53.9c4.8 4.4 11.9 5.5 17.8 2.6s9.5-9 9-15.5l-5.6-79.4 78.7-12.2c6.5-1 11.7-5.9 13.1-12.2c.3-1.2 .4-2.4 .4-3.6c0-5.2-2.5-10.1-6.9-13.2l-65.6-45.1L315 92.2c3.3-5.7 2.7-12.8-1.4-17.9s-10.9-7.2-17.2-5.3L220.3 92.1l-29.4-74C188.4 12 182.6 8 176 8s-12.4 4-14.9 10.1l-29.4 74L55.6 68.9c-6.3-1.9-13.1 .2-17.2 5.3s-4.6 12.2-1.4 17.9l39.5 69.1L10.9 206.4c-4.4 3-6.9 8-6.9 13.2z" />
        <path d="M480 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM408 384l-17.8 0c-10.9 0-18.6-10.7-15.2-21.1l38.3-114.8-33.9 56.3c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3l11.6 0c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L585 362.9c3.5 10.4-4.3 21.1-15.2 21.1L552 384l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-16 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96z" />
    </Icon>
);

export default PersonDressBurst;