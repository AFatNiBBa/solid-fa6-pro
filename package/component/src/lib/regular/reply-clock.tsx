
import { Icon } from "../../index";

/**
 * A component that renders the `reply-clock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-clock?s=regular reply-clock}
 * @preview ![reply-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/reply-clock.svg)
 */
const ReplyClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 144a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 64c8.8 0 16 7.2 16 16l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm16 272c0-5.6-.3-11.2-.8-16.6c-5 .4-10.1 .6-15.2 .6c-11.4 0-22.6-1.1-33.4-3.2c.9 6.2 1.4 12.6 1.4 19.2c0 15.3-1.9 29.1-5.2 41.5C442 316.7 386.2 272 320 272l-96 0-24 0c-13.3 0-24 10.7-24 24l0 24 0 28.1L55.9 240 176 131.9l0 28.1 0 24c0 13.3 10.7 24 24 24l24 0 108 0c-5.9-15.1-9.8-31.2-11.3-48L272 160l-48 0 0-48 0-16c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144C3.9 222.3 0 230.9 0 240s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2l0-16 0-48 48 0 48 0c53 0 96 43 96 96c0 17.3-4.2 30.5-9.5 40.2c-1.6 2.9-3.3 5.5-5 7.9c-2.6 3.5-5.3 6.4-7.7 8.6c-.5 .5-1 .9-1.4 1.4c-4.8 4.9-8.3 11.3-8.3 18.1c0 10.9 8.8 19.7 19.7 19.7c2.8 0 5.6-.6 8.1-1.9c2.6-1.4 6.3-3.5 10.8-6.5c2.7-1.8 5.7-3.8 8.9-6.2c3.7-2.7 7.6-5.8 11.7-9.3C473.4 462.2 512 413.9 512 336z" />
    </Icon>
);

export default ReplyClock;