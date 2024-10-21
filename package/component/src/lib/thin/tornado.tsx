
import { Icon } from "../../index";

/**
 * A component that renders the `tornado` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tornado?s=thin tornado}
 * @preview ![tornado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tornado.svg)
 */
const Tornado: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 45.6C16 74.1 21.1 102 30.6 128l305.5 0c-.1-1.4-.1-2.9-.1-4.3c0-22.2 9.6-43.3 26.3-57.9l33.8-29.6c2.5-2.2 3.9-5.3 3.9-8.7c0-6.4-5.2-11.5-11.5-11.5L32 16c-8.8 0-16 7.2-16 16l0 13.6zM37.1 144c20.1 44.6 53.6 82.8 97.2 108.4L194.8 288l232.9 0c-4.4-16.7-11.9-32.4-22.4-46.4l-53.8-71.8c-5.8-7.8-10.1-16.6-12.7-25.9L37.1 144zM430.8 304L222 304l28.8 16.9c21.8 12.8 39.5 31.7 50.8 54.4c12.4 24.8 16.6 52.9 12.1 80.2l-5.9 35.7c-.4 2.5 1.5 4.7 4 4.7c1.1 0 2.1-.4 2.9-1.2l78.2-78.2c25.1-25.1 39.2-59.1 39.2-94.6c0-6-.4-12-1.2-17.9zM0 45.6L0 32C0 14.3 14.3 0 32 0L388.5 0C403.7 0 416 12.3 416 27.5c0 7.9-3.4 15.5-9.4 20.7L372.8 77.8C359.6 89.4 352 106.1 352 123.7c0 13.2 4.3 26 12.2 36.6L418 232c19.4 25.9 30 57.5 30 89.9c0 39.7-15.8 77.8-43.9 105.9l-78.2 78.2c-3.8 3.8-8.9 5.9-14.2 5.9c-12.4 0-21.8-11.1-19.8-23.4l5.9-35.7c4-24 .3-48.7-10.6-70.5c-10-19.9-25.5-36.5-44.6-47.8L126.2 266.2C48 220.2 0 136.3 0 45.6z" />
    </Icon>
);

export default Tornado;