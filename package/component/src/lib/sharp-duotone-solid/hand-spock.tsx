
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-spock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-spock?s=sharp-duotone-solid hand-spock}
 * @preview ![hand-spock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-spock.svg)
 */
const HandSpock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M31.4 328.5l29 27.6L156.8 448c43.1 41.1 100.4 64 160 64l2.3 0 16.9 0c57 0 106.9-37.3 123-91.7l83.7-283.2 9.1-30.7L490.4 88.2l-9.1 30.7L440.8 256l-24.7 0L455.3 70.6l6.6-31.3L399.3 26.1l-6.6 31.3L350.7 256l-41.5 0L251.2 39.7 242.9 8.8 181.1 25.4l8.3 30.9L242.9 256l-29.6 0L166.6 102.7l-9.3-30.6L96.1 90.7l9.3 30.6 71.7 235.5-61.6-58.6-29-27.6L31.4 328.5zM224 320c5.3 0 10.7 0 16 0c2.7 0 5.3 0 8 0c50.7 0 101.3 0 152 0c5.3 0 10.7 0 16 0l0 32c-5.3 0-10.7 0-16 0c-25.6 0-51.3 0-77 0c17.9 18.7 29 44.1 29 72l0 8 0 16c-10.7 0-21.3 0-32 0l0-16 0-8c0-39.8-32.2-72-72-72c-2.7 0-5.3 0-8 0c-5.3 0-10.7 0-16 0l0-32z" />
        <path d="M240 320l-16 0 0 32 16 0 8 0c39.8 0 72 32.2 72 72l0 8 0 16 32 0 0-16 0-8c0-27.9-11-53.3-29-72l77 0 16 0 0-32-16 0-152 0-8 0z" />
    </Icon>
);

export default HandSpock;