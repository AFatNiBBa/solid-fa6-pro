
import { Icon, generic } from "../../index";

/**
 * A component that renders the `timeline-arrow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline-arrow?s=duotone timeline-arrow}
 * @preview ![timeline-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/timeline-arrow.svg)
 */
const TimelineArrow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 17.7 14.3 32 32 32l160 0 0 54.7c9.8-4.3 20.6-6.7 32-6.7c1.4 0 2.8 0 4.2 .1s2.8 .2 4.2 .3c2.8 .3 5.5 .7 8.2 1.3c5.4 1.1 10.5 2.8 15.4 4.9l0-54.7 274.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l96-96c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-96-96c-6.2-6.2-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4c-12.5 12.5-12.5 32.8 0 45.3L530.7 224 384 224l0-54.7c-9.8 4.3-20.6 6.7-32 6.7c-1.4 0-2.8 0-4.2-.1s-2.8-.2-4.2-.3c-2.8-.3-5.5-.7-8.2-1.3c-5.4-1.1-10.5-2.8-15.4-4.9l0 54.7-160 0 0-54.7c-9.8 4.3-20.6 6.7-32 6.7c-1.4 0-2.8 0-4.2-.1s-2.8-.2-4.2-.3c-2.8-.3-5.5-.7-8.2-1.3c-5.4-1.1-10.5-2.8-15.4-4.9L96 224l-64 0c-17.7 0-32 14.3-32 32z" />
        <path d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM352 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM200 416a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default TimelineArrow;