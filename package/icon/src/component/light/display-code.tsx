
import { Icon } from "../../index";

/**
 * A component that renders the `display-code` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-code?s=light display-code}
 * @preview ![display-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/display-code.svg)
 */
const DisplayCode: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 32c17.7 0 32 14.3 32 32l0 288c0 17.7-14.3 32-32 32l-167.7 0c-.2 0-.4 0-.6 0l-111.5 0c-.2 0-.4 0-.6 0L64 384c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l448 0zM64 416l149.1 0-10.7 64L144 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l72 0 144 0 72 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-58.4 0-10.7-64L512 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64zm170.9 64l10.7-64 84.9 0 10.7 64-106.2 0zm16.4-324.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L198.6 208l52.7-52.7zm96-22.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L377.4 208l-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c6.2-6.2 6.2-16.4 0-22.6l-64-64z" />
    </Icon>
);

export default DisplayCode;