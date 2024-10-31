
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-spock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-spock?s=duotone hand-spock}
 * @preview ![hand-spock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-spock.svg)
 */
const HandSpock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 312c0 10.6 4.2 21.1 12.4 29L156.8 448c43.1 41.1 100.4 64 160 64l10.9 0 8.2 0c.1-.2 .2-.2 .2-.3c58.3-3.5 108.6-43.2 125.3-99.7l81.2-275c5-16.9-4.7-34.7-21.6-39.8s-34.7 4.7-39.8 21.6L443.5 247.1c-1.6 5.3-6.4 8.9-12 8.9c-7.9 0-13.8-7.3-12.2-15.1l36-170.3c3.7-17.3-7.4-34.3-24.7-37.9s-34.3 7.4-37.9 24.7L355.1 235.1c-2.6 12.2-13.3 20.9-25.8 20.9c-11.9 0-22.4-8-25.4-19.5l-57-212.8C242.3 6.6 224.8-3.5 207.7 1.1s-27.2 22.1-22.6 39.2L238 237.8c2.5 9.2-4.5 18.2-14 18.2c-6.4 0-12-4.2-13.9-10.3L166.6 102.7c-5.1-16.9-23-26.4-39.9-21.3s-26.4 23-21.3 39.9l62.8 206.4c2.4 7.9-7.2 13.8-13.2 8.1L99.6 283c-16-15.2-41.3-14.6-56.6 1.4c-7.4 7.7-11 17.7-11 27.6zm192 24c0-8.8 7.2-16 16-16l8 0 152 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-77 0c17.9 18.7 29 44.1 29 72l0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8c0-39.8-32.2-72-72-72l-8 0c-8.8 0-16-7.2-16-16z" />
        <path d="M240 320c-8.8 0-16 7.2-16 16s7.2 16 16 16l8 0c39.8 0 72 32.2 72 72l0 8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-8c0-27.9-11-53.3-29-72l77 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-152 0-8 0z" />
    </Icon>
);

export default HandSpock;