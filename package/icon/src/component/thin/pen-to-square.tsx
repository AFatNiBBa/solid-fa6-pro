
import { Icon } from "../../index";

/**
 * A component that renders the `pen-to-square` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-to-square?s=thin pen-to-square}
 * @preview ![pen-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pen-to-square.svg)
 */
const PenToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M460.3 39.6l12.1 12.1c15.6 15.6 15.6 40.9 0 56.6L440 140.7 371.3 72l32.4-32.4c15.6-15.6 40.9-15.6 56.6 0zM175.4 267.9L360 83.3 428.7 152 244.1 336.6c-5.3 5.3-12 9-19.3 10.7l-78.1 18 18-78.1c1.7-7.3 5.4-14 10.7-19.3zm217-239.6L164.1 256.6c-7.4 7.4-12.6 16.8-15 27l-20.9 90.6c-.6 2.7 .2 5.5 2.1 7.5s4.8 2.8 7.5 2.1l90.6-20.9c10.2-2.4 19.6-7.5 27-15L483.7 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 28.3c-21.9-21.9-57.3-21.9-79.2 0zM72 64C32.2 64 0 96.2 0 136L0 440c0 39.8 32.2 72 72 72l304 0c39.8 0 72-32.2 72-72l0-144c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 144c0 30.9-25.1 56-56 56L72 496c-30.9 0-56-25.1-56-56l0-304c0-30.9 25.1-56 56-56l144 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 64z" />
    </Icon>
);

export default PenToSquare;