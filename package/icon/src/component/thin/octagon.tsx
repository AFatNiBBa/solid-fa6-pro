
import { Icon } from "../../index";

/**
 * A component that renders the `octagon` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon?s=thin octagon}
 * @preview ![octagon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/octagon.svg)
 */
const Octagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M151.9 32.5c10.5-10.5 24.7-16.4 39.6-16.4l129 0c14.9 0 29.1 5.9 39.6 16.4L479.5 151.9c10.5 10.5 16.4 24.7 16.4 39.6l0 129c0 14.9-5.9 29.1-16.4 39.6L360.1 479.5c-10.5 10.5-24.7 16.4-39.6 16.4l-129 0c-14.9 0-29.1-5.9-39.6-16.4L32.5 360.1C22 349.6 16.1 335.3 16.1 320.5l0-129c0-14.9 5.9-29.1 16.4-39.6L151.9 32.5zM191.5 .1c-19.1 0-37.4 7.6-50.9 21.1L21.2 140.6C7.7 154.1 .1 172.4 .1 191.5l0 129c0 19.1 7.6 37.4 21.1 50.9L140.6 490.8c13.5 13.5 31.8 21.1 50.9 21.1l129 0c19.1 0 37.4-7.6 50.9-21.1L490.8 371.4c13.5-13.5 21.1-31.8 21.1-50.9l0-129c0-19.1-7.6-37.4-21.1-50.9L371.4 21.2C357.9 7.7 339.6 .1 320.5 .1l-129 0z" />
    </Icon>
);

export default Octagon;