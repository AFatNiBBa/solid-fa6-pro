
import { Icon } from "../../index";

/**
 * A component that renders the `plug-circle-xmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug-circle-xmark?s=regular plug-circle-xmark}
 * @preview ![plug-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/plug-circle-xmark.svg)
 */
const PlugCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 24c0-13.3-10.7-24-24-24S80 10.7 80 24l0 88 48 0 0-88zm176 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 88 48 0 0-88zM24 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 64c0 80.2 59 146.6 136 158.2l0 73.8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-73.8c15.2-2.3 29.7-6.7 43.1-12.9c-2.1-10.8-3.1-21.9-3.1-33.3c0-7.1 .4-14.1 1.2-20.9C238.9 360.2 216.3 368 192 368c-61.9 0-112-50.1-112-112l0-64 224 0 0 55.2c13.8-14.6 30-26.8 48-36l0-19.2 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0-48 0L80 144l-48 0-8 0zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm59.3-180.7L454.6 368l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L432 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L409.4 368l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L432 345.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default PlugCircleXmark;