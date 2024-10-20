
import { Icon, generic } from "../../index";

/**
 * A component that renders the `locust` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/locust?s=duotone locust}
 * @preview ![locust](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/locust.svg)
 */
const Locust: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 56c0 13.3 10.7 24 24 24l16 0c98.7 0 180.6 71.4 197 165.4c29.8 11.6 51 40.6 51 74.6l0-40C576 143 465 32 328 32l-16 0c-13.3 0-24 10.7-24 24z" />
        <path d="M286.1 142.5c-3.3-7.8-10.5-13.2-18.9-14.3s-16.7 2.3-22 8.9l-240 304c-8.2 10.4-6.4 25.5 4 33.7s25.5 6.4 33.7-4l79.4-100.5 43 16.4-40.5 55c-7.9 10.7-5.6 25.7 5.1 33.6s25.7 5.6 33.6-5.1L215.1 400l74.5 0-29.3 42.3c-7.5 10.9-4.8 25.8 6.1 33.4s25.8 4.8 33.4-6.1L348 400l80.4 0 38.8 67.9c6.6 11.5 21.2 15.5 32.7 8.9s15.5-21.2 8.9-32.7L483.6 400l12.4 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-64.2 0-41.8-97.5c-3.4-7.9-10.8-13.4-19.3-14.4s-17 2.7-22.1 9.6l-40.9 55.5-21.7-50.7zM379.6 240L333 240l29.5-40 17.1 40zm-106.3 0l-48.2 0 32.7-41.5 16.9 39.5-1.4 1.9zm-146.6 0l-37.9 0C57.4 240 32 265.4 32 296.8c0 15.5 6.3 30 16.9 40.4L126.7 240zM480 320a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Locust;