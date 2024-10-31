
import { Icon } from "../../index";

/**
 * A component that renders the `crown` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crown?s=sharp-thin crown}
 * @preview ![crown](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/crown.svg)
 */
const Crown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M264 72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm29.9 39.6l75.8 151.6 8.9 17.7L394 268.5l122.2-97.7c1.1 .6 2.3 1.2 3.5 1.8L466.6 464l-357.3 0-53-291.5c1.2-.5 2.3-1.1 3.5-1.8L182 268.5l15.5 12.4 8.9-17.7 75.8-151.6c1.9 .3 3.9 .4 5.9 .4s4-.1 5.9-.4zM504 160L396.8 245.8 384 256l-7.3-14.6L309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L199.3 241.4 192 256l-12.8-10.2L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40l.7 0L96 480l384 0 55.3-304c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24zM40 112a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm472 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Crown;