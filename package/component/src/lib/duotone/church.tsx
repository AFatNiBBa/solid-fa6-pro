
import { Icon, generic } from "../../index";

/**
 * A component that renders the `church` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/church?s=duotone church}
 * @preview ![church](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/church.svg)
 */
const Church: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 372.4c0-17.5 9.5-33.6 24.9-42.1L160 256l0 256L48 512c-26.5 0-48-21.5-48-48l0-91.6zM480 256l135.1 74.3c15.3 8.4 24.9 24.6 24.9 42.1l0 91.6c0 26.5-21.5 48-48 48l-112 0 0-256z" />
        <path d="M320 0c13.3 0 24 10.7 24 24l0 24 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 46.4L456.7 210c14.5 8.7 23.3 24.3 23.3 41.2L480 512l-96 0 0-96c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96-96 0 0-260.8c0-16.9 8.8-32.5 23.3-41.2L296 142.4 296 96l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-24c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default Church;