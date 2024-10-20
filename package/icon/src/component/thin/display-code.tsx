
import { Icon } from "../../index";

/**
 * A component that renders the `display-code` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-code?s=thin display-code}
 * @preview ![display-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/display-code.svg)
 */
const DisplayCode: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 16C37.5 16 16 37.5 16 64l0 288c0 26.5 21.5 48 48 48l167.8 0 .3 0 111.7 0 .3 0L512 400c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L64 16zM222.6 416L64 416c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L512 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-158.6 0 13.3 80 73.2 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0-144 0-80 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l73.2 0 13.3-80zm16.2 0l-13.3 80 125.1 0-13.3-80-98.4 0zM496 80L80 80l0 256 416 0 0-256zM80 64l416 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16L64 80c0-8.8 7.2-16 16-16zm165.7 77.7L179.3 208l66.3 66.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-72-72c-3.1-3.1-3.1-8.2 0-11.3l72-72c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zm96-11.3l72 72c3.1 3.1 3.1 8.2 0 11.3l-72 72c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L396.7 208l-66.3-66.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0z" />
    </Icon>
);

export default DisplayCode;