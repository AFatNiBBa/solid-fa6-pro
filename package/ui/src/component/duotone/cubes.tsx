
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cubes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cubes?s=duotone cubes}
 * @preview ![cubes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cubes.svg)
 */
const Cubes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M48 323.2l80 30.6 0 100.4L52.8 421.2c-2.9-1.3-4.8-4.2-4.8-7.3l0-90.7zm128 30.6l80-30.6 0 95.9-80 35.2 0-100.4zM184 121c26.7 10.2 53.3 20.4 80 30.7l0 89.2c-26.7-10.1-53.3-20.2-80-30.3l0-89.6zm128 30.7c26.7-10.2 53.3-20.4 80-30.7l0 89.6c-26.7 10.1-53.3 20.2-80 30.3l0-89.2zm8 171.6l80 30.6 0 100.4-80-35.2 0-95.9zm128 30.6l80-30.6 0 90.7c0 3.2-1.9 6-4.8 7.3L448 454.3l0-100.4z" />
        <path d="M290.8 48.6c-1.8-.7-3.8-.7-5.7 0L206.8 78.3 288 109.5l81.2-31.1L290.8 48.6zM184 210.6l80 30.3 0-89.2L184 121l0 89.6zm128 30.3l80-30.3 0-89.6-80 30.7 0 89.2zM288 457.5L174.5 507.3c-14.4 6.3-30.7 6.3-45.1 0l-96-42.2C13.1 456.2 0 436.1 0 413.9L0 294.7c0-23.3 14.4-44.1 36.1-52.4l96-36.4c1.3-.5 2.6-.9 3.9-1.3l0-112.2c0-23.3 14.4-44.1 36.1-52.4l96-36.4c12.8-4.8 26.9-4.8 39.7 0l96 36.4C425.6 48.4 440 69.3 440 92.5l0 112.2c1.3 .4 2.6 .8 3.9 1.3l96 36.4c21.8 8.2 36.1 29.1 36.1 52.4l0 119.1c0 22.2-13.1 42.3-33.5 51.3l-96 42.2c-14.4 6.3-30.7 6.3-45.1 0L288 457.5zM149.2 250.9L70.8 280.6 152 311.7l81.2-31.1-78.4-29.7c-1.8-.7-3.8-.7-5.7 0zm26.8 103l0 100.4 80-35.2 0-95.9-80 30.6zm-48 0L48 323.2l0 90.7c0 3.2 1.9 6 4.8 7.3L128 454.3l0-100.4zm293.2-103l-78.4 29.7L424 311.7l81.2-31.1-78.4-29.7c-1.8-.7-3.8-.7-5.7 0zM448 454.3l75.2-33.1c2.9-1.3 4.8-4.2 4.8-7.3l0-90.7-80 30.6 0 100.4zM400 353.9l-80-30.6 0 95.9 80 35.2 0-100.4z" />
    </Icon>
);

export default Cubes;