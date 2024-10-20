
import { Icon } from "../../index";

/**
 * A component that renders the `person-chalkboard` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-chalkboard?s=thin person-chalkboard}
 * @preview ![person-chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/person-chalkboard.svg)
 */
const PersonChalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M152 56a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm96 0A56 56 0 1 0 136 56a56 56 0 1 0 112 0zM122 173.9c9.7-18.4 28.8-29.9 49.5-29.9l79.6 0L384 144c8.8 0 16 7.2 16 16s-7.2 16-16 16l-120 0c-8.8 0-16 7.2-16 16l0 55.8 0 .2 0 232c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 120c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-232c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 232c0 17.7 14.3 32 32 32s32-14.3 32-32l0-120c0-4.4 3.6-8 8-8s8 3.6 8 8l0 120c0 17.7 14.3 32 32 32s32-14.3 32-32l0-223.8 0-.2 0-64 120 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0-80c0-17.7 14.3-32 32-32l224 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32l0-48-16 0 0 48c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L368 0c-26.5 0-48 21.5-48 48l0 80-68.9 0-79.6 0c-26.7 0-51.2 14.8-63.7 38.4L32.9 308.3c-2.1 3.9-.6 8.7 3.3 10.8s8.7 .6 10.8-3.3L122 173.9z" />
    </Icon>
);

export default PersonChalkboard;