
import { Icon } from "../../index";

/**
 * A component that renders the `star-half-stroke` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-half-stroke?s=thin star-half-stroke}
 * @preview ![star-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/star-half-stroke.svg)
 */
const StarHalfStroke: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M200.1 170.7L46.8 193.3c-3 .4-5.5 2.5-6.4 5.4s-.2 6 2 8.2L31.2 218.1l11.2-11.3L153.5 317c3.7 3.7 5.4 8.9 4.5 14L131.8 486.6c-.5 3 .7 6 3.2 7.8s5.8 2 8.4 .6L280 422l0-400L212.1 161.8c-2.3 4.8-6.8 8.1-12.1 8.8zM296 422.1L432.4 495c2.7 1.4 6 1.2 8.4-.6s3.7-4.8 3.2-7.8L417.9 331c-.9-5.1 .8-10.4 4.5-14L533.5 206.9c2.2-2.1 2.9-5.3 2-8.2s-3.4-5-6.4-5.4L375.8 170.7c-5.2-.8-9.7-4.1-12.1-8.8L296 22.3l0 399.8zm154.2 85.3c-7.4 5.3-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0s17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5z" />
    </Icon>
);

export default StarHalfStroke;