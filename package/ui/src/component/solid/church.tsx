
import { Icon } from "../../index";

/**
 * A component that renders the `church` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/church?s=solid church}
 * @preview ![church](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/church.svg)
 */
const Church: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2L160 512l96 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 96 0 0-260.8c0-16.9-8.8-32.5-23.3-41.2L344 142.4 344 96l32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4L0 464c0 26.5 21.5 48 48 48l80 0 0-238.4L24.9 330.3zM592 512c26.5 0 48-21.5 48-48l0-91.6c0-17.5-9.5-33.6-24.9-42.1L512 273.6 512 512l80 0z" />
    </Icon>
);

export default Church;