
import { Icon } from "../../index";

/**
 * A component that renders the `subscript` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/subscript?s=thin subscript}
 * @preview ![subscript](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/subscript.svg)
 */
const Subscript: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8 64c-4.4 0-8 3.6-8 8s3.6 8 8 8l28 0L166.1 256 36 432 8 432c-4.4 0-8 3.6-8 8s3.6 8 8 8l32 0c2.5 0 4.9-1.2 6.4-3.2L176 269.5 305.6 444.8c1.5 2 3.9 3.2 6.4 3.2l32 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-28 0L185.9 256 316 80l28 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-32 0c-2.5 0-4.9 1.2-6.4 3.2L176 242.5 46.4 67.2c-1.5-2-3.9-3.2-6.4-3.2L8 64zM464 360c0-2.7-1.3-5.1-3.5-6.6s-5-1.8-7.5-.8l-40 16c-4.1 1.6-6.1 6.3-4.5 10.4s6.3 6.1 10.4 4.5l29-11.6L448 496l-32 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l40 0 40 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-32 0 0-136z" />
    </Icon>
);

export default Subscript;