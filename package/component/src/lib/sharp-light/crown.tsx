
import { Icon } from "../../index";

/**
 * A component that renders the `crown` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crown?s=sharp-light crown}
 * @preview ![crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/crown.svg)
 */
const Crown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L206.6 226.7 192 256l-25.6-20.4L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L96 480l384 0 55.3-304c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-94.4 75.6L384 256l-14.6-29.3L309 106zM220.6 270.3L288 135.6l67.4 134.8 17.7 35.4L404 281l93.2-74.6L453.3 448l-330.6 0L78.8 206.4 172 281l30.9 24.7 17.7-35.4z" />
    </Icon>
);

export default Crown;