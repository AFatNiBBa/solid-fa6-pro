
import { Icon } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=thin font-awesome}
 * @preview ![font-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/font-awesome.svg)
 */
const FontAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M102.8 56A38.8 38.8 0 1 0 25.2 56a38.8 38.8 0 1 0 77.5 0zM64 112s0 0 0 0s0 0 0 0l-16 0 0 320 421.6 0c5.7 0 10.4-4.7 10.4-10.4c0-1.5-.3-2.9-.9-4.2L417.4 278.5c-1.8-4.1-1.8-8.9 0-13l61.7-138.9c.6-1.3 .9-2.8 .9-4.2c0-5.7-4.7-10.4-10.4-10.4L64 112zM32 102C17.5 91.8 8 75 8 56C8 25.1 33.1 0 64 0s56 25.1 56 56c0 15.7-6.4 29.8-16.8 40l366.4 0c14.6 0 26.4 11.8 26.4 26.4c0 3.7-.8 7.3-2.3 10.7L432 272l61.7 138.9c1.5 3.4 2.3 7 2.3 10.7c0 14.6-11.8 26.4-26.4 26.4L48 448l0 64-16 0 0-64 0-16 0-320 0-10z" />
    </Icon>
);

export default FontAwesome;