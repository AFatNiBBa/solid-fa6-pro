
import { Icon } from "../../index";

/**
 * A component that renders the `crown` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crown?s=light crown}
 * @preview ![crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/crown.svg)
 */
const Crown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40l.7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6l277.2 0c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106zM117.9 421.7L78.8 206.4l62.3 49.9c31.8 25.5 79 15.1 97.2-21.4L288 135.6l49.7 99.4c18.2 36.4 65.4 46.8 97.2 21.4l62.3-49.9L458.1 421.7c-2.8 15.2-16 26.3-31.5 26.3l-277.2 0c-15.5 0-28.7-11.1-31.5-26.3z" />
    </Icon>
);

export default Crown;