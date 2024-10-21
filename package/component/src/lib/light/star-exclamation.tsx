
import { Icon } from "../../index";

/**
 * A component that renders the `star-exclamation` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-exclamation?s=light star-exclamation}
 * @preview ![star-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/star-exclamation.svg)
 */
const StarExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M202.4 186.5L65 206.8l99.8 98.8c7.4 7.3 10.8 17.8 9 28.1L150.2 473.2l122.6-65.5c9.4-5 20.7-5 30.2 0l122.6 65.5L402.1 333.7c-1.7-10.3 1.6-20.7 9-28.1l99.8-98.8L373.4 186.5c-10.5-1.5-19.5-8.2-24.1-17.7L287.9 42.3 226.5 168.8c-4.6 9.5-13.6 16.1-24.1 17.7zM450.2 507.4c-7.4 5.3-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0s17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5zM288 128c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zM264 352a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default StarExclamation;