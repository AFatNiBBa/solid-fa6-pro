
import { Icon } from "../../index";

/**
 * A component that renders the `fork` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fork?s=sharp-regular fork}
 * @preview ![fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/fork.svg)
 */
const Fork: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 136l-34.3-34.3L376.8 236.3c-2 2.6-4.1 5.1-6.4 7.4l-1.9 1.9C356.7 257.4 340.7 264 324 264c-16.4 0-32.2-6.4-44-17.9L265.9 232c-11.5-11.7-17.9-27.5-17.9-44c0-16.7 6.6-32.7 18.4-44.5l1.9-1.9c2.3-2.3 4.8-4.5 7.4-6.4L410.3 34.3 376 0 246.9 96.8c-4.4 3.3-8.6 7-12.6 10.9l-1.9 1.9c-20.8 20.8-32.5 49-32.5 78.4c0 24.5 8.1 48.1 22.8 67.3L18.2 459.8l-17 17 33.9 33.9 17-17L256.7 289.2C275.9 303.9 299.5 312 324 312c29.4 0 57.6-11.7 78.4-32.5l1.9-1.9c3.9-3.9 7.6-8.1 10.9-12.6L512 136s0 0 0 0zM457 89l4-4L427 51l-4 4L307 171l-17 17L324 221.9l17-17L457 89z" />
    </Icon>
);

export default Fork;