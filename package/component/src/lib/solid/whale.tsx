
import { Icon } from "../../index";

/**
 * A component that renders the `whale` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whale?s=solid whale}
 * @preview ![whale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/whale.svg)
 */
const Whale: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M175.8 13.4c-1-5.9-5.2-10.8-10.9-12.6s-12-.3-16.2 3.9L108 45.4C89.7 63.7 81.4 89.6 85.6 115.1l7.9 47.4L43.6 212.4C15.7 240.3 0 278.2 0 317.6C0 407.3 72.7 480 162.4 480L544 480c53 0 96-43 96-96l0-111.9C640 192.5 575.5 128 495.9 128c-82.5 0-162.4 29.5-225 83.2L156.4 309.4c-8 6.8-18.1 10.6-28.6 10.6l-1.1 0c-18.3 0-34.5-11.7-40.3-29c-4-12-2.4-25.2 4.3-35.9l37.6-60.1 44.7 7.5c25.5 4.2 51.5-4.1 69.7-22.3l40.7-40.7c4.2-4.2 5.8-10.5 3.9-16.2s-6.7-9.9-12.6-10.9L189.9 98.1 175.8 13.4zM400 280a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Whale;