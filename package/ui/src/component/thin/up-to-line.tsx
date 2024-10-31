
import { Icon } from "../../index";

/**
 * A component that renders the `up-to-line` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-line?s=thin up-to-line}
 * @preview ![up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/up-to-line.svg)
 */
const UpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 48l368 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8zm176 99.3c2.1-2.1 5-3.3 8-3.3s5.9 1.2 8 3.3L331.8 279.4c2.7 2.7 4.2 6.4 4.2 10.2c0 8-6.5 14.4-14.4 14.4L248 304c-4.4 0-8 3.6-8 8l0 136c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-136c0-4.4-3.6-8-8-8l-73.6 0c-8 0-14.4-6.5-14.4-14.4c0-3.8 1.5-7.5 4.2-10.2L184 147.3zm8-19.3c-7.2 0-14.2 2.9-19.3 8L40.9 268.1c-5.7 5.7-8.9 13.4-8.9 21.5C32 306.4 45.6 320 62.4 320l65.6 0 0 128c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-128 65.6 0c16.8 0 30.4-13.6 30.4-30.4c0-8.1-3.2-15.8-8.9-21.5L211.3 136c-5.1-5.1-12.1-8-19.3-8z" />
    </Icon>
);

export default UpToLine;