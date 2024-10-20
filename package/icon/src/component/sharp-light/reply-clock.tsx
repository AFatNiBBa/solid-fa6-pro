
import { Icon } from "../../index";

/**
 * A component that renders the `reply-clock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-clock?s=sharp-light reply-clock}
 * @preview ![reply-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/reply-clock.svg)
 */
const ReplyClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M496 32a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256A144 144 0 1 0 496 0a144 144 0 1 0 0 288zM512 64l-32 0 0 16 0 64 0 16 16 0 48 0 16 0 0-32-16 0-32 0 0-48 0-16zm0 272c0-5.6-.3-11.2-.8-16.6c-5 .4-10.1 .6-15.2 .6c-5.7 0-11.4-.3-17-.8c.6 5.5 1 11.1 1 16.8c0 38.2-13.9 67.8-32.1 90.3C444.9 349.4 381.6 288 304 288l-80 0-32 0 0 32 0 52.6L47.4 240 192 107.4l0 52.6 0 32 32 0 102.6 0c-2.9-10.3-4.9-21-5.9-32L256 160l-32 0 0-32 0-32 0-32-32 0L23.7 218.3 0 240l23.7 21.7L192 416l32 0 0-32 0-32 0-32 32 0 48 0c61.9 0 112 50.1 112 112c0 9.9-1.4 19-3.5 27.4C404.2 491.8 384 512 384 512s27-10.1 56.2-33.4C474.5 451.1 512 405.2 512 336z" />
    </Icon>
);

export default ReplyClock;