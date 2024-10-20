
import { Icon } from "../../index";

/**
 * A component that renders the `person-chalkboard` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-chalkboard?s=light person-chalkboard}
 * @preview ![person-chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/person-chalkboard.svg)
 */
const PersonChalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M168 56a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0A56 56 0 1 0 136 56a56 56 0 1 0 112 0zM179.3 160l44.7 0 0 160-64 0 0-156c6-2.6 12.5-4 19.3-4zM160 496l0-144 64 0 0 144c0 8.8 7.2 16 16 16s16-7.2 16-16l0-336 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-80c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-80-32 0 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L368 0c-26.5 0-48 21.5-48 48l0 80-76.9 0-63.8 0c-29.5 0-56.7 16.3-70.6 42.3L49.9 280.5c-4.2 7.8-1.2 17.5 6.6 21.7s17.5 1.2 21.7-6.6L128 202.2 128 496c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
    </Icon>
);

export default PersonChalkboard;