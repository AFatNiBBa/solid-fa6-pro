
import { Icon } from "../../index";

/**
 * A component that renders the `merge` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/merge?s=thin merge}
 * @preview ![merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/merge.svg)
 */
const Merge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 72c0-4.4 3.6-8 8-8l88 0 47.3 0c13.1 0 25.4 6.4 32.8 17.2L285 237.7c4.5 6.4 11.8 10.3 19.7 10.3L480 248l4.7 0-66.3-66.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l80 80c3.1 3.1 3.1 8.2 0 11.3l-80 80c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L484.7 264l-4.7 0-175.3 0c-7.9 0-15.2 3.8-19.7 10.3L176.1 430.8c-7.5 10.7-19.7 17.2-32.8 17.2L96 448 8 448c-4.4 0-8-3.6-8-8s3.6-8 8-8l88 0 47.3 0c7.9 0 15.2-3.8 19.7-10.3L271.9 265.2c2.5-3.6 5.5-6.6 8.8-9.2c-3.4-2.5-6.4-5.6-8.8-9.2L163 90.3C158.5 83.8 151.1 80 143.3 80L96 80 8 80c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Merge;