
import { Icon } from "../../index";

/**
 * A component that renders the `star-sharp` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp?s=light star-sharp}
 * @preview ![star-sharp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/star-sharp.svg)
 */
const StarSharp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 43.6L239.2 196.9C237.1 203.5 231 208 224 208L75.3 208l126 91c5.5 4 7.9 11.1 5.9 17.6L163.5 460.6l114.7-89.2c5.8-4.5 13.9-4.5 19.6 0l114.7 89.2L368.7 316.7c-2-6.5 .4-13.6 5.9-17.6l126-91L352 208c-7 0-13.1-4.5-15.2-11.1L288 43.6zM262.3 18.8C265.9 7.6 276.3 0 288 0s22.1 7.6 25.7 18.8l50 157.2 153.7 0c14.7 0 26.6 11.9 26.6 26.6c0 8.5-4.1 16.6-11 21.6L402.6 318.3l50.8 167c4.1 13.3-5.9 26.8-19.8 26.8c-4.6 0-9.1-1.5-12.7-4.4L288 404.3 155.1 507.6c-3.6 2.8-8.1 4.4-12.7 4.4c-13.9 0-23.9-13.4-19.8-26.8l50.8-167L43 224.1c-6.9-5-11-13-11-21.6C32 187.9 43.9 176 58.6 176l153.7 0 50-157.2z" />
    </Icon>
);

export default StarSharp;