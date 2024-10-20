
import { Icon } from "../../index";

/**
 * A component that renders the `tornado` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tornado?s=regular tornado}
 * @preview ![tornado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tornado.svg)
 */
const Tornado: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M332.4 48L48 48c.3 28 6.3 55.1 17 80l239.1 0c-.1-1.8-.1-3.6-.1-5.4C304 95 314.2 68.5 332.4 48zM317.5 176L94 176c15.5 19.3 34.6 35.9 56.6 48.9L203.5 256 376 256l-49.6-66.1c-3.3-4.4-6.3-9.1-8.9-13.9zm80.9 128l-115.6 0c19.9 15.1 36.1 34.6 47.3 57c8.9 17.8 14.4 37 16.4 56.5l23.6-23.6c19.1-19.1 29.8-45 29.8-72c0-6-.5-12.1-1.6-17.9zm5.7 123.9L340 492l-.4 .4L336 496l-10.1 10.1c-3.8 3.8-8.9 5.9-14.2 5.9c-12.4 0-21.8-11.1-19.8-23.4l2.4-14.1 .8-5 .1-.5 2.7-16c4-24 .3-48.7-10.6-70.5c-10-19.9-25.5-36.5-44.6-47.8L126.2 266.2C48 220.2 0 136.3 0 45.6L0 32C0 14.3 14.3 0 32 0L393.4 0C405.9 0 416 10.1 416 22.6c0 6-2.4 11.8-6.6 16L370.8 77.2c-12 12-18.8 28.4-18.8 45.4c0 13.9 4.5 27.4 12.8 38.5L418 232c19.4 25.9 30 57.5 30 89.9c0 39.7-15.8 77.8-43.9 105.9z" />
    </Icon>
);

export default Tornado;