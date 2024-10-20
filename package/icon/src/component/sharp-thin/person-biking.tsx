
import { Icon } from "../../index";

/**
 * A component that renders the `person-biking` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-biking?s=sharp-thin person-biking}
 * @preview ![person-biking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/person-biking.svg)
 */
const PersonBiking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M392 16a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm0 96A56 56 0 1 0 392 0a56 56 0 1 0 0 112zM616 376a112 112 0 1 1 -224 0 112 112 0 1 1 224 0zM504 248a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM240 384A112 112 0 1 1 16 384a112 112 0 1 1 224 0zM128 256a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM325.1 121.8c-3-2.5-7.3-2.4-10.3 .1L235.3 190c-20.3 17.4-18.1 49.4 4.3 64L336 316.4l0 99.6 0 8 16 0 0-8 0-104 0-4.4-3.7-2.4-100-64.7c-13.5-8.7-14.8-27.9-2.6-38.4l74.4-63.8 82.8 67.8 2.2 1.8 2.9 0 80 0 8 0 0-16-8 0-77.1 0-85.8-70.2z" />
    </Icon>
);

export default PersonBiking;