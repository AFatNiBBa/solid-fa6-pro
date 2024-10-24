
import { Icon } from "../../index";

/**
 * A component that renders the `comma` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comma?s=thin comma}
 * @preview ![comma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/comma.svg)
 */
const Comma: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M138 374.6c5-7.4 7.6-16.3 7.6-25.3c0-24.9-20.2-45.3-45-45.3c-21.8 0-40.4 15.6-44.3 37.1L32.2 476.7c-1.8 10 5.9 19.3 16.1 19.3c5.5 0 10.6-2.7 13.6-7.3L138 374.6zm13.3 8.9L75.3 497.6c-6 9-16.1 14.4-26.9 14.4c-20.2 0-35.4-18.2-31.9-38.1L40.7 338.2c5.2-29.1 30.5-50.2 60-50.2c33.7 0 61 27.6 61 61.3c0 12.1-3.6 24.1-10.3 34.2z" />
    </Icon>
);

export default Comma;