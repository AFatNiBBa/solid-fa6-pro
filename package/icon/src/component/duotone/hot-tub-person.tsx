
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hot-tub-person` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hot-tub-person?s=duotone hot-tub-person}
 * @preview ![hot-tub-person](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hot-tub-person.svg)
 */
const HotTubPerson: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64a64 64 0 1 0 128 0A64 64 0 1 0 0 64zM0 256l256 0L153.6 179.2C137 166.7 116.8 160 96 160c-53 0-96 43-96 96zM224 24l0 5.2c0 34 14.4 66.4 39.7 89.2l16.4 14.8c15.2 13.7 23.8 33.1 23.8 53.5l0 13.2c0 13.3 10.7 24 24 24s24-10.7 24-24l0-13.2c0-34-14.4-66.4-39.7-89.2L295.8 82.8C280.7 69.1 272 49.7 272 29.2l0-5.2c0-13.3-10.7-24-24-24s-24 10.7-24 24zm112 0l0 5.2c0 34 14.4 66.4 39.7 89.2l16.4 14.8c15.2 13.7 23.8 33.1 23.8 53.5l0 13.2c0 13.3 10.7 24 24 24s24-10.7 24-24l0-13.2c0-34-14.4-66.4-39.7-89.2L407.8 82.8C392.7 69.1 384 49.7 384 29.2l0-5.2c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M0 256l448 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256zm112 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zm112 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96zm80-16c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zm112 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96z" />
    </Icon>
);

export default HotTubPerson;