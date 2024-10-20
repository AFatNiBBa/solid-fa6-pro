
import { Icon } from "../../index";

/**
 * A component that renders the `triangle-instrument` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-instrument?s=thin triangle-instrument}
 * @preview ![triangle-instrument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/triangle-instrument.svg)
 */
const TriangleInstrument: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M296 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56.4c-27.8 2.5-53.1 17.8-68.1 41.6L46.5 367.7C37 382.8 32 400.2 32 418c0 51.9 42.1 94 94 94L450 512c51.9 0 94-42.1 94-94c0-17.8-5-35.2-14.5-50.2L439.4 225.2l-11.6 11.6 88.1 139.5c7.9 12.5 12.1 26.9 12.1 41.7c0 43.1-34.9 78-78 78L126 496c-43.1 0-78-34.9-78-78c0-14.8 4.2-29.2 12.1-41.7L225.4 114.5C239 93 262.6 80 288 80s49 13 62.6 34.5l50.9 80.6-74.3 74.3C316.4 261 302.8 256 288 256c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64c0-14.8-5-28.4-13.4-39.2L410.3 209l11.6-11.6L541.7 77.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L413.1 183.5l-49-77.6C349.1 82.1 323.8 66.8 296 64.4L296 8zm40 312a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
    </Icon>
);

export default TriangleInstrument;