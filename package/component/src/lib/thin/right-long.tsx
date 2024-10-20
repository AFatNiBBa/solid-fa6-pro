
import { Icon } from "../../index";

/**
 * A component that renders the `right-long` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-long?s=thin right-long}
 * @preview ![right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/right-long.svg)
 */
const RightLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 200l0-81.1c0-3.8 3.1-6.9 6.9-6.9c1.8 0 3.5 .7 4.7 1.9L495.2 254.1c.5 .5 .8 1.2 .8 1.9s-.3 1.4-.8 1.9L347.6 398.1c-1.3 1.2-3 1.9-4.7 1.9c-3.8 0-6.9-3.1-6.9-6.9l0-81.1c0-8.8-7.2-16-16-16L40 296c-13.3 0-24-10.7-24-24l0-32c0-13.3 10.7-24 24-24l280 0c8.8 0 16-7.2 16-16zm170.2 42.5L358.6 102.3c-4.2-4-9.9-6.3-15.8-6.3c-12.6 0-22.9 10.2-22.9 22.9l0 65.1 0 16-16 0L40 200c-22.1 0-40 17.9-40 40l0 32c0 22.1 17.9 40 40 40l264 0 16 0 0 16 0 65.1c0 12.6 10.2 22.9 22.9 22.9c5.9 0 11.5-2.3 15.8-6.3L506.2 269.5c3.7-3.5 5.8-8.4 5.8-13.5s-2.1-10-5.8-13.5z" />
    </Icon>
);

export default RightLong;