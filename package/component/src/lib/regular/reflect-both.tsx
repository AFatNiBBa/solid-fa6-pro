
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-both` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-both?s=regular reflect-both}
 * @preview ![reflect-both](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/reflect-both.svg)
 */
const ReflectBoth: typeof Icon = x => (
    <Icon {...x}>
        <path d="M345.4 48L256 137.4 166.6 48l178.7 0zM384 0L128 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9S396.9 0 384 0zM137.4 256L48 345.4l0-178.7L137.4 256zM19.8 98.4C7.8 103.4 0 115.1 0 128L0 384c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9zM374.6 256L464 166.6l0 178.7L374.6 256zM492.2 98.4c-12-5-25.7-2.2-34.9 6.9l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-256c0-12.9-7.8-24.6-19.8-29.6zM256 374.6L345.4 464l-178.7 0L256 374.6zM413.6 492.2c5-12 2.2-25.7-6.9-34.9l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8z" />
    </Icon>
);

export default ReflectBoth;