
import { Icon } from "../../index";

/**
 * A component that renders the `display-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-slash?s=light display-slash}
 * @preview ![display-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/display-slash.svg)
 */
const DisplaySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 110.3L32 352c0 35.3 28.7 64 64 64l149.1 0-10.7 64L176 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l72 0 144 0 72 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-58.4 0-10.7-64 24.3 0-40.5-32-2.4 0c-.2 0-.4 0-.6 0l-111.5 0c-.2 0-.4 0-.6 0L96 384c-17.7 0-32-14.3-32-32l0-216.4L32 110.3zm562.5 281C603 380.5 608 366.8 608 352l0-288c0-35.3-28.7-64-64-64L96 0c-1.5 0-3 .1-4.4 .2L99 .2 139.4 32 544 32c17.7 0 32 14.3 32 32l0 288c0 7.3-2.5 14.1-6.6 19.5l25.1 19.8zM277.6 416l84.9 0 10.7 64-106.2 0 10.7-64zM25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4z" />
    </Icon>
);

export default DisplaySlash;