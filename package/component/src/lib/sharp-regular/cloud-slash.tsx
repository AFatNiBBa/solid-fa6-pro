
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-slash?s=sharp-regular cloud-slash}
 * @preview ![cloud-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cloud-slash.svg)
 */
const CloudSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L635.2 480l4.8 0 0-48 0-80c0-59.6-40.8-109.8-96-124l0-20c0-70.7-57.3-128-128-128c-13.9 0-27.3 2.2-39.9 6.3C346.8 53 303.9 32 256 32c-46.8 0-89 20.1-118.2 52.2L48.4 14.8zm127.5 99C196.2 92.9 224.6 80 256 80c33.5 0 63.5 14.6 84.1 38L361 141.8l30.1-9.8c7.8-2.5 16.1-3.9 24.9-3.9c44.2 0 80 35.8 80 80l0 20 0 37.2 36 9.3c34.5 8.9 60 40.3 60 77.5l0 80-6.2 0L175.9 113.8zM144 234.1l0-24.7L97.2 172.6c-.8 6.4-1.2 12.9-1.2 19.4l0 8.2C40.1 220 0 273.3 0 336l0 96 0 48 48 0 96 0 343.4 0-60.9-48L144 432l-96 0 0-96c0-41.7 26.6-77.3 64-90.6l32-11.3z" />
    </Icon>
);

export default CloudSlash;