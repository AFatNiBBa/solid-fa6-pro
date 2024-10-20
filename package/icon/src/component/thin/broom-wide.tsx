
import { Icon } from "../../index";

/**
 * A component that renders the `broom-wide` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom-wide?s=thin broom-wide}
 * @preview ![broom-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/broom-wide.svg)
 */
const BroomWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M509.7 13.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-152 152-24.2-24.2c-20.2-20.2-51.4-24.6-76.3-10.7L16.4 246.9C6.3 252.5 0 263.2 0 274.8c0 8.5 3.4 16.6 9.3 22.6L214.7 502.7c6 6 14.1 9.3 22.6 9.3c11.6 0 22.3-6.3 27.9-16.4L392.6 266.2c13.9-25 9.5-56.1-10.7-76.3l-24.2-24.2 152-152zM310.8 141.4l59.7 59.7c15.2 15.2 18.4 38.5 8 57.3l-27.4 49.4-147-146.9 49.4-27.4c18.7-10.4 42.1-7.1 57.3 8zM189.6 168.9L343 322.4 251.1 487.8c-2.8 5.1-8.1 8.2-13.9 8.2c-4.2 0-8.3-1.7-11.3-4.7L97 362.3l60.7-60.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L85.7 351l-65-65c-3-3-4.7-7-4.7-11.3c0-5.8 3.1-11.1 8.2-13.9l165.4-91.9z" />
    </Icon>
);

export default BroomWide;