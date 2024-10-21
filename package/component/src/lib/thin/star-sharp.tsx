
import { Icon } from "../../index";

/**
 * A component that renders the `star-sharp` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp?s=thin star-sharp}
 * @preview ![star-sharp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/star-sharp.svg)
 */
const StarSharp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 16c-1.3 0-2.4 .8-2.8 2L231.6 186.4c-1.1 3.3-4.1 5.6-7.6 5.6L50.9 192c-1.6 0-2.9 1.3-2.9 2.9c0 .9 .4 1.7 1 2.2L189.1 313.9c2.5 2.1 3.5 5.4 2.5 8.5L139.4 494.1c-.3 .9 .4 1.9 1.4 1.9c.3 0 .6-.1 .9-.3l141.4-110c2.9-2.2 6.9-2.2 9.8 0l141.4 110c.3 .2 .6 .3 .9 .3c1 0 1.7-.9 1.4-1.9L384.3 322.3c-.9-3.1 .1-6.4 2.5-8.5L527 197.1c.7-.6 1-1.4 1-2.2c0-1.6-1.3-2.9-2.9-2.9L352 192c-3.5 0-6.6-2.3-7.6-5.6L290.8 18c-.4-1.2-1.5-2-2.8-2zm-18-2.8C272.5 5.3 279.8 0 288 0s15.5 5.3 18 13.2L357.8 176l167.3 0c10.4 0 18.9 8.5 18.9 18.9c0 5.6-2.5 10.9-6.8 14.5l-136 113.3 50.7 166.7c3.4 11.2-5 22.5-16.7 22.5c-3.9 0-7.7-1.3-10.7-3.7L288 402.1 151.5 508.3c-3.1 2.4-6.8 3.7-10.7 3.7c-11.7 0-20.1-11.3-16.7-22.5l50.7-166.7L38.8 209.4c-4.3-3.6-6.8-8.9-6.8-14.5c0-10.4 8.5-18.9 18.9-18.9l167.3 0L270 13.2z" />
    </Icon>
);

export default StarSharp;