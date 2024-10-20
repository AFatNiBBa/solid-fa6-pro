
import { Icon } from "../../index";

/**
 * A component that renders the `tornado` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tornado?s=sharp-light tornado}
 * @preview ![tornado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tornado.svg)
 */
const Tornado: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 122.6c0 13.9 4.5 27.4 12.8 38.5l55.6 74.2c17.9 23.8 27.5 52.8 27.5 82.6c0 41.8-19 81.3-51.6 107.4l-70.9 56.7L288 512l7.9-47.3 2-11.8c4-24 .3-48.7-10.6-70.5c-10-19.9-25.5-36.5-44.6-47.8L126.2 266.2C48 220.2 0 136.3 0 45.6L0 32 0 0 32 0 384 0l32 0 0 32L370.8 77.2c-12 12-18.8 28.4-18.8 45.4zm24.4 277.7c25-20 39.6-50.4 39.6-82.5c0-4.7-.3-9.3-.9-13.9l-161.6 0 5.3 3.1c24.5 14.4 44.3 35.6 57 61c10.6 21.2 15.9 44.6 15.5 68.1l45-36zM405.5 272c-3-6.1-6.5-12-10.6-17.5l-55.6-74.2c-4.7-6.3-8.6-13.1-11.7-20.3L63.4 160c19 31.9 45.9 59.2 79 78.7L200 272.5l0-.5 205.5 0zM320 122.6c0-25.5 10.1-50 28.2-68L370.7 32 32 32l0 13.6c0 28.7 5.5 56.6 15.7 82.4l272.4 0c-.1-1.8-.2-3.6-.2-5.4z" />
    </Icon>
);

export default Tornado;