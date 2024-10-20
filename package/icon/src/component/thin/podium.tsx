
import { Icon } from "../../index";

/**
 * A component that renders the `podium` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium?s=thin podium}
 * @preview ![podium](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/podium.svg)
 */
const Podium: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 16l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32zM176.7 56L168 56c-30.9 0-56 25.1-56 56l0 48 328 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 176c-4.4 0-8-3.6-8-8s3.6-8 8-8l88 0 0-48c0-39.8 32.2-72 72-72l8.7 0C180.5 17.3 200.2 0 224 0l64 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-64 0c-23.8 0-43.5-17.3-47.3-40zM73.6 455.2L45.5 208l16.1 0L89.4 453.4c2.8 24.3 23.3 42.6 47.7 42.6l173.7 0c24.4 0 44.9-18.3 47.7-42.6L386.4 208l16.1 0L374.5 455.2c-3.7 32.3-31 56.8-63.6 56.8l-173.7 0c-32.6 0-59.9-24.4-63.6-56.8z" />
    </Icon>
);

export default Podium;