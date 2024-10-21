
import { Icon } from "../../index";

/**
 * A component that renders the `shield-cat` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-cat?s=light shield-cat}
 * @preview ![shield-cat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shield-cat.svg)
 */
const ShieldCat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M243.5 37.3c8-3.4 17-3.4 25 0l176.7 75c11.3 4.8 18.9 15.5 18.8 27.6c-.5 94-39.4 259.8-195.5 334.5c-7.9 3.8-17.2 3.8-25.1 0C87.3 399.6 48.5 233.8 48 139.8c-.1-12.1 7.5-22.8 18.8-27.6l176.7-75zM281 7.8c-16-6.8-34-6.8-50 0L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L281 7.8zM171.3 132.7c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8l0 128c0 61.9 50.1 112 112 112s112-50.1 112-112l0-128c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5L281.4 192l-50.7 0-59.3-59.3zM176 272l0-89.4 36.7 36.7c3 3 7.1 4.7 11.3 4.7l64 0c4.2 0 8.3-1.7 11.3-4.7L336 182.6l0 89.4c0 44.2-35.8 80-80 80s-80-35.8-80-80zm56 0a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm64 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default ShieldCat;