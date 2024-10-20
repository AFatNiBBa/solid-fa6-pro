
import { Icon } from "../../index";

/**
 * A component that renders the `volume-xmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-xmark?s=thin volume-xmark}
 * @preview ![volume-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/volume-xmark.svg)
 */
const VolumeXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M281 51.5c2.5-2.2 5.8-3.5 9.2-3.5c7.6 0 13.8 6.2 13.8 13.8l0 388.4c0 7.6-6.2 13.8-13.8 13.8c-3.4 0-6.6-1.2-9.2-3.5L143.2 338c-1.5-1.3-3.4-2-5.3-2L56 336c-22.1 0-40-17.9-40-40l0-80c0-22.1 17.9-40 40-40l81.9 0c2 0 3.9-.7 5.3-2L281 51.5zM290.2 32c-7.3 0-14.3 2.7-19.8 7.5L134.9 160 56 160c-30.9 0-56 25.1-56 56l0 80c0 30.9 25.1 56 56 56l78.9 0L270.4 472.5c5.5 4.8 12.5 7.5 19.8 7.5c16.5 0 29.8-13.3 29.8-29.8l0-388.4C320 45.3 306.7 32 290.2 32zM413.7 178.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L468.7 256l-66.3 66.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L480 267.3l66.3 66.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L491.3 256l66.3-66.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L480 244.7l-66.3-66.3z" />
    </Icon>
);

export default VolumeXmark;