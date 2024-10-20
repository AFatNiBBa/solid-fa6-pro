
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-cross` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-cross?s=thin arrows-cross}
 * @preview ![arrows-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrows-cross.svg)
 */
const ArrowsCross: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M280 32c-4.4 0-8 3.6-8 8s3.6 8 8 8l140.7 0L2.3 466.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L432 59.3 432 200c0 4.4 3.6 8 8 8s8-3.6 8-8l0-160c0-4.4-3.6-8-8-8L280 32zM13.7 34.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L190.1 233.4l11.3-11.3L13.7 34.3zM420.7 464L280 464c-4.4 0-8 3.6-8 8s3.6 8 8 8l160 0c4.4 0 8-3.6 8-8l0-160c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 140.7L257.9 278.6l-11.3 11.3L420.7 464z" />
    </Icon>
);

export default ArrowsCross;