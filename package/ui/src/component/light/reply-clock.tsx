
import { Icon } from "../../index";

/**
 * A component that renders the `reply-clock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-clock?s=light reply-clock}
 * @preview ![reply-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/reply-clock.svg)
 */
const ReplyClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M496 32a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256A144 144 0 1 0 496 0a144 144 0 1 0 0 288zm0-224c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-48c0-8.8-7.2-16-16-16zm16 272c0-5.6-.3-11.2-.8-16.6c-5 .4-10.1 .6-15.2 .6c-5.7 0-11.4-.3-17-.8c.6 5.5 1 11.1 1 16.8c0 46.1-15.9 79.7-34 103.2c1.3-7.1 2-14.8 2-23.2c0-70.7-57.3-128-128-128l-96 0-8 0c-13.3 0-24 10.7-24 24l0 8 0 16 0 48L32 240 192 96l0 48 0 16 0 8c0 13.3 10.7 24 24 24l8 0 102.6 0c-2.9-10.3-4.9-21-5.9-32L256 160l-32 0 0-16 0-16 0-32c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144C3.9 222.3 0 230.9 0 240s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2l0-32 0-16 0-16 32 0 64 0c53 0 96 43 96 96c0 30.4-12.8 47.9-22.2 56.7c-5.5 5.1-9.8 12-9.8 19.5c0 10.9 8.8 19.7 19.7 19.7c2.8 0 5.6-.6 8.1-1.9C430.5 499.9 512 449.3 512 336z" />
    </Icon>
);

export default ReplyClock;