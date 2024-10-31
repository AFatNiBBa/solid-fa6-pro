
import { Icon } from "../../index";

/**
 * A component that renders the `cloud` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud?s=regular cloud}
 * @preview ![cloud](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cloud.svg)
 */
const Cloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M410.8 134.2c-19.3 8.6-42 3.5-55.9-12.5C332.8 96.1 300.3 80 264 80c-66.3 0-120 53.7-120 120c0 0 0 0 0 0s0 0 0 0l0 .2c0 20.4-12.8 38.5-32 45.3C74.6 258.7 48 294.3 48 336c0 53 43 96 96 96l360 0 3.3 0c.6-.1 1.3-.1 1.9-.2c46.2-2.7 82.8-41 82.8-87.8c0-36-21.6-67.1-52.8-80.7c-20.1-8.8-31.6-30-28.1-51.7c.6-3.8 .9-7.7 .9-11.7c0-39.8-32.2-72-72-72c-10.5 0-20.4 2.2-29.2 6.2zM512 479.8l0 .2-8 0-40 0-320 0C64.5 480 0 415.5 0 336c0-62.7 40.1-116 96-135.8l0-.2c0-92.8 75.2-168 168-168c50.9 0 96.4 22.6 127.3 58.3C406.2 83.7 422.6 80 440 80c66.3 0 120 53.7 120 120c0 6.6-.5 13-1.5 19.3c48 21 81.5 68.9 81.5 124.7c0 72.4-56.6 131.6-128 135.8z" />
    </Icon>
);

export default Cloud;