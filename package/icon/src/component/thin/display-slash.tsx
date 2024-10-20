
import { Icon } from "../../index";

/**
 * A component that renders the `display-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-slash?s=thin display-slash}
 * @preview ![display-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/display-slash.svg)
 */
const DisplaySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 16c26.5 0 48 21.5 48 48l0 288c0 11.1-3.8 21.3-10.1 29.4l12.6 9.9C603 380.5 608 366.8 608 352l0-288c0-35.3-28.7-64-64-64L96 0c-1.5 0-3 .1-4.4 .2L99 .2 119.1 16 544 16zM32 110.3L32 352c0 35.3 28.7 64 64 64l158.6 0-13.3 80L168 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 144 0 80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-73.2 0-13.3-80 33.7 0-20.3-16-22.8 0-.3 0-111.7 0-.3 0L96 400c-26.5 0-48-21.5-48-48l0-229L32 110.3zM112 352l226.1 0-20.3-16L112 336l0-162.5L96 160.8 96 336c0 8.8 7.2 16 16 16zm432-16l0-256c0-8.8-7.2-16-16-16L179.9 64l20.3 16L528 80l0 256-3.6 0 14.6 11.6c3-2.9 4.9-7 4.9-11.6zM257.4 496l13.3-80 98.4 0 13.3 80-125.1 0zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7z" />
    </Icon>
);

export default DisplaySlash;