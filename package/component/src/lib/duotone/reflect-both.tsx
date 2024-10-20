
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reflect-both` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-both?s=duotone reflect-both}
 * @preview ![reflect-both](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/reflect-both.svg)
 */
const ReflectBoth: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 12.9 7.8 24.6 19.8 29.6c4 1.6 8.1 2.4 12.2 2.4c8.3 0 16.5-3.3 22.6-9.4l128-128c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9S0 115.1 0 128zM329.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c6.1 6.1 14.3 9.4 22.6 9.4c4.1 0 8.3-.8 12.2-2.4c12-5 19.8-16.6 19.8-29.6l0-256c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-128 128z" />
        <path d="M413.6 19.8C408.6 7.8 396.9 0 384 0L128 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9zM384 512c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0z" />
    </Icon>
);

export default ReflectBoth;