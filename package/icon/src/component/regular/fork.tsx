
import { Icon } from "../../index";

/**
 * A component that renders the `fork` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fork?s=regular fork}
 * @preview ![fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/fork.svg)
 */
const Fork: typeof Icon = x => (
    <Icon {...x}>
        <path d="M398.4 43.2c10.6-8 12.8-23 4.8-33.6s-23-12.8-33.6-4.8l-122.7 92c-4.4 3.3-8.6 7-12.6 10.9l-1.9 1.9c-20.8 20.8-32.5 49-32.5 78.4c0 24.5 8.1 48.1 22.8 67.3L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L256.7 289.2C275.9 303.9 299.5 312 324 312c29.4 0 57.6-11.7 78.4-32.5l1.9-1.9c3.9-3.9 7.6-8.1 10.9-12.6l92-122.7c8-10.6 5.8-25.6-4.8-33.6s-25.6-5.8-33.6 4.8l-92 122.7c-2 2.6-4.1 5.1-6.4 7.4l-1.9 1.9C356.7 257.4 340.7 264 324 264s-32.7-6.6-44.5-18.4l-6.5-6.5c0 0 0 0 0 0s0 0 0 0l-6.5-6.5C254.6 220.7 248 204.7 248 188s6.6-32.7 18.4-44.5l1.9-1.9c2.3-2.3 4.8-4.5 7.4-6.4l122.7-92zM457 89c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L307 171c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L457 89z" />
    </Icon>
);

export default Fork;