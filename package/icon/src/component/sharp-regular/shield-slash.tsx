
import { Icon } from "../../index";

/**
 * A component that renders the `shield-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-slash?s=sharp-regular shield-slash}
 * @preview ![shield-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shield-slash.svg)
 */
const ShieldSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M496.8 363l124.1 96.3 19 14.7-29.4 37.9-19-14.7L18.9 52.7 0 38 29.4 .1l19 14.7 77.8 60.4L308.4 4.5 320 0l11.6 4.5L539.1 85l19.2 7.4 1.2 20.5c2.9 50-4.9 126.3-37.3 200.9c-7.2 16.5-15.6 32.9-25.3 49zM170.4 109.5L458.6 333.3c7.4-12.6 13.9-25.5 19.5-38.5C505 232.9 512.9 169.5 512 126L320 51.5l-149.6 58zm-8.5 185.2c28.2 64.9 77 127.7 158.1 164.8c30-13.7 55.6-31 77.3-50.5l38.2 30.1c-28.1 26.5-62 49.7-102.8 67.3L320 512l-12.7-5.5c-98.4-42.6-156.7-117.3-189.4-192.6c-23.5-54.1-34.1-109-37-154.2l53.3 42c5.2 29.5 13.9 61.5 27.7 93z" />
    </Icon>
);

export default ShieldSlash;