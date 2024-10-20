
import { Icon } from "../../index";

/**
 * A component that renders the `star-half` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-half?s=light star-half}
 * @preview ![star-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/star-half.svg)
 */
const StarHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M226.5 168.8c-4.6 9.5-13.6 16.1-24.1 17.7L65 206.8l99.8 98.8c7.4 7.3 10.8 17.8 9 28.1L150.2 473.2l129.7-69.3 0-345.1-53.4 110zM293.3 .6c10.9 2.5 18.6 12.2 18.6 23.4l0 384.7c0 8.9-4.9 17-12.7 21.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.3c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5c4.9-10.1 16.1-15.4 27-12.9z" />
    </Icon>
);

export default StarHalf;