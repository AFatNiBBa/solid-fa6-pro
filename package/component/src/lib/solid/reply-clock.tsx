
import { Icon } from "../../index";

/**
 * A component that renders the `reply-clock` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-clock?s=solid reply-clock}
 * @preview ![reply-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/reply-clock.svg)
 */
const ReplyClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 144a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zM496 64c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-48c0-8.8-7.2-16-16-16zm0 256c5.1 0 10.2-.2 15.2-.6c.5 5.5 .8 11 .8 16.6c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96l-96 0 0 64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 257.7 0 249.1 0 240s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4s19 16.6 19 29.2l0 64 96.7 0c8.1 89.7 83.5 160 175.3 160z" />
    </Icon>
);

export default ReplyClock;