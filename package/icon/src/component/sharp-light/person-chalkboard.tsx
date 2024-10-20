
import { Icon } from "../../index";

/**
 * A component that renders the `person-chalkboard` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-chalkboard?s=sharp-light person-chalkboard}
 * @preview ![person-chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-chalkboard.svg)
 */
const PersonChalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M168 56a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0A56 56 0 1 0 136 56a56 56 0 1 0 112 0zM140.9 128l-9.6 0-4.5 8.5-76.9 144-7.5 14.1 28.2 15.1 7.5-14.1L128 202.1 128 496l0 16 32 0 0-16 0-144 64 0 0 144 0 16 32 0 0-16 0-336 144 0 16 0 0-32-16 0-48 0 0-96 256 0 0 256-256 0 0-96-32 0 0 96 0 32 32 0 256 0 32 0 0-32 0-256 0-32L608 0 352 0 320 0l0 32 0 96-76.9 0-102.2 0zM224 320l-64 0 0-160 64 0 0 160z" />
    </Icon>
);

export default PersonChalkboard;