
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-slash?s=sharp-regular droplet-slash}
 * @preview ![droplet-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/droplet-slash.svg)
 */
const DropletSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M505.5 369.7l115.4 89.6 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7L209.9 140.2c27.8-40.3 57.2-77.4 78.6-103.3C307.3 14.1 320 0 320 0s12.7 14.1 31.5 36.9C405.9 102.8 512 241.2 512 320c0 17.2-2.3 33.8-6.5 49.7zm-257.6-200L463 336.7c.6-5.5 1-11.1 1-16.7c0-14.5-7.4-39.2-24.7-72.8c-16.5-32-39-66.6-62.3-99c-20.2-28.1-40.5-53.9-57-74.1c-16.5 20.2-36.8 46-57 74.1c-5.1 7.1-10.1 14.2-15.1 21.4zM456.1 455.4C421.4 490.4 373.2 512 320 512c-106 0-192-86-192-192c0-27.4 12.8-61.9 31.8-98.1l38.4 30.3C182.7 283.2 176 306.2 176 320c0 79.5 64.5 144 144 144c37.9 0 72.4-14.6 98.1-38.6l38 30zM328 368l0 48c-57.4 0-104-46.6-104-104l48 0c0 30.9 25.1 56 56 56z" />
    </Icon>
);

export default DropletSlash;