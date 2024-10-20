
import { Icon } from "../../index";

/**
 * A component that renders the `tornado` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tornado?s=light tornado}
 * @preview ![tornado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tornado.svg)
 */
const Tornado: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 122.6c0 13.9 4.5 27.4 12.8 38.5L418 232c19.4 25.9 30 57.5 30 89.9c0 39.7-15.8 77.8-43.9 105.9l-78.2 78.2c-3.8 3.8-8.9 5.9-14.2 5.9c-12.4 0-21.8-11.1-19.8-23.4l5.9-35.7c4-24 .3-48.7-10.6-70.5c-10-19.9-25.5-36.5-44.6-47.8L126.2 266.2C48 220.2 0 136.3 0 45.6L0 32C0 14.3 14.3 0 32 0L393.4 0C405.9 0 416 10.1 416 22.6c0 6-2.4 11.8-6.6 16L370.8 77.2c-12 12-18.8 28.4-18.8 45.4zM32 45.6c0 28.7 5.5 56.6 15.7 82.4l272.4 0c-.1-1.8-.2-3.6-.2-5.4c0-25.5 10.1-50 28.2-68L370.7 32 32 32l0 13.6zM142.4 238.7L200 272.5l0-.5 204.9 0c-3.4-7.3-7.6-14.2-12.5-20.8l-53.2-70.9c-4.7-6.3-8.6-13.1-11.7-20.3L63.4 160c19 31.9 45.9 59.2 79 78.7zM253.5 304l5.3 3.1c24.5 14.4 44.3 35.6 57 61c13.8 27.5 18.5 58.6 13.7 89l51.9-51.9c22.1-22.1 34.5-52.1 34.5-83.3c0-6-.5-12-1.4-17.9l-161.1 0z" />
    </Icon>
);

export default Tornado;