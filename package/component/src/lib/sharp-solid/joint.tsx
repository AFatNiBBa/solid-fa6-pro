
import { Icon } from "../../index";

/**
 * A component that renders the `joint` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/joint?s=sharp-solid joint}
 * @preview ![joint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/joint.svg)
 */
const Joint: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 0l64 0 0 43c0 38.2 15.2 74.8 42.2 101.8l21 21c21 21 32.8 49.5 32.8 79.2l0 43-64 0 0-43c0-12.7-5.1-24.9-14.1-33.9l-21-21C405.9 151.1 384 98.1 384 43l0-43zM640 288l-64 0 0-43c0-38.2-15.2-74.8-42.2-101.8l-21-21c-21-21-32.8-49.5-32.8-79.2l0-43 64 0 0 43c0 12.7 5.1 24.9 14.1 33.9l21 21c39 39 60.9 91.9 60.9 147.1l0 43zM0 432s89.6-64 234.6-77.5L365.8 512 288 512C112 512 0 432 0 432zm464 80l-56.5 0L274.3 352.2c4.5-.1 9.1-.2 13.7-.2l48 0 56.5 0L525.8 512 464 512zm103.5 0L434.2 352 640 352l0 160-16 0-56.5 0z" />
    </Icon>
);

export default Joint;