
import { Icon } from "../../index";

/**
 * A component that renders the `reply-clock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-clock?s=sharp-regular reply-clock}
 * @preview ![reply-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/reply-clock.svg)
 */
const ReplyClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 144a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM512 64l0 16 0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0zm0 272c0-5.6-.3-11.2-.8-16.6c-5 .4-10.1 .6-15.2 .6c-11.4 0-22.6-1.1-33.4-3.2c.9 6.3 1.4 12.7 1.4 19.2c0 17-3.1 32-8.2 45.4C434.6 317.8 374.7 272 304 272l-80 0-48 0 0 48 0 16.2L71 240l105-96.2 0 16.2 0 48 48 0 108 0c-5.9-15.1-9.8-31.2-11.3-48L272 160l-48 0 0-48 0-12.2 0-.9L224 64l-32 0L176 78.7 35.5 207.4 0 240l35.5 32.6L176 401.3 192 416l32 0 0-34.9 0-.9 0-12.2 0-48 48 0 32 0c61.9 0 112 50.1 112 112c0 1.4 0 2.9-.1 4.3C414.1 481.9 384 512 384 512s41.8-15.7 77.7-53c26.9-28 50.3-68.1 50.3-123z" />
    </Icon>
);

export default ReplyClock;