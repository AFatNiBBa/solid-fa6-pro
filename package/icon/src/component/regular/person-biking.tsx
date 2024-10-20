
import { Icon } from "../../index";

/**
 * A component that renders the `person-biking` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-biking?s=regular person-biking}
 * @preview ![person-biking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-biking.svg)
 */
const PersonBiking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM208 384A80 80 0 1 1 48 384a80 80 0 1 1 160 0zM128 256a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM592 384a80 80 0 1 1 -160 0 80 80 0 1 1 160 0zM512 256a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM341.5 149.6c3.5-2.5 8.3-1.9 11 1.4l44.8 56c4.6 5.7 11.5 9 18.7 9l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-52.5 0L390 121c-18.8-23.5-52.7-27.9-76.9-10.1l-74.6 55c-38.5 28.4-33.4 87.4 9.3 108.8L304 302.8 304 416c0 13.3 10.7 24 24 24s24-10.7 24-24l0-128c0-9.1-5.1-17.4-13.3-21.5l-69.6-34.8c-10.7-5.3-12-20.1-2.3-27.2l74.6-55z" />
    </Icon>
);

export default PersonBiking;