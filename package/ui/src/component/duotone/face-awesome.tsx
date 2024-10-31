
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-awesome` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-awesome?s=duotone face-awesome}
 * @preview ![face-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-awesome.svg)
 */
const FaceAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm80-72c0-35.3 28.7-64 64-64c3.4 0 6.7 .3 10 .8c22.6 3.5 41.3 18.9 49.5 39.6c2.9 7.3 4.5 15.3 4.5 23.6l0 10.3c0 16.4-13.3 29.7-29.7 29.7l-68.6 0C93.3 224 80 210.7 80 194.3L80 184zm20 120.2c0-8.7 7.1-16.2 16.3-16.2l279.4 0c10.4 0 18.1 9.6 15.9 19.8c-5 22.3-14.6 42.7-27.7 60.2c-29.4 39.3-76.5 64-127.9 64c-74.3 0-139.5-51.6-155.6-124.2c-.3-1.2-.4-2.4-.4-3.6zM272 192c0-39.8 32.2-72 72-72c5.8 0 11.4 .7 16.8 2c22 5.3 40.1 20.6 49.1 40.9c3.9 8.9 6.1 18.8 6.1 29.1l0 7.5c0 13.5-11 24.5-24.5 24.5l-95.1 0C283 224 272 213 272 199.5l0-7.5z" />
        <path d="M154 120.8c22.6 3.5 41.3 18.9 49.5 39.6c-5.6 9.4-15.8 15.6-27.5 15.6c-17.7 0-32-14.3-32-32c0-9.1 3.8-17.4 10-23.2zM360.8 122c22 5.3 40.1 20.6 49.1 40.9c-5.8 8-15.2 13.1-25.9 13.1c-17.7 0-32-14.3-32-32c0-8.5 3.3-16.3 8.8-22zM100.4 307.8c-2.3-10.2 5.5-19.8 15.9-19.8l279.4 0c10.4 0 18.1 9.6 15.9 19.8c-5 22.3-14.6 42.7-27.7 60.2c-13.4-10-30-16-47.9-16c-44.2 0-80 35.8-80 80c-74.3 0-139.5-51.6-155.6-124.2z" />
    </Icon>
);

export default FaceAwesome;