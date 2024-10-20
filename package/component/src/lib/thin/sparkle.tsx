
import { Icon } from "../../index";

/**
 * A component that renders the `sparkle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkle?s=thin sparkle}
 * @preview ![sparkle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sparkle.svg)
 */
const Sparkle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48c-1.6 0-3 1-3.6 2.4L163.2 190.8c-.8 2-2.4 3.6-4.4 4.4L18.4 252.4c-1.5 .6-2.4 2-2.4 3.6s1 3 2.4 3.6l140.4 57.2c2 .8 3.6 2.4 4.4 4.4l57.2 140.4c.6 1.5 2 2.4 3.6 2.4s3-1 3.6-2.4l57.2-140.4c.8-2 2.4-3.6 4.4-4.4l140.4-57.2c1.5-.6 2.4-2 2.4-3.6s-1-3-2.4-3.6L289.2 195.2c-2-.8-3.6-2.4-4.4-4.4L227.6 50.4c-.6-1.5-2-2.4-3.6-2.4zm-18.4-3.6C208.6 36.9 215.9 32 224 32s15.4 4.9 18.4 12.4l55.9 137.2 137.2 55.9c7.5 3.1 12.4 10.3 12.4 18.4s-4.9 15.4-12.4 18.4L298.4 330.4 242.4 467.6c-3.1 7.5-10.3 12.4-18.4 12.4s-15.4-4.9-18.4-12.4L149.6 330.4 12.4 274.4C4.9 271.4 0 264.1 0 256s4.9-15.4 12.4-18.4l137.2-55.9L205.6 44.4z" />
    </Icon>
);

export default Sparkle;