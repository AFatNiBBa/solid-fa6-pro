
import { Icon } from "../../index";

/**
 * A component that renders the `moon` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon?s=sharp-thin moon}
 * @preview ![moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/moon.svg)
 */
const Moon: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M287.6 41.2c-9.9-2.9-20.1-5.2-30.5-6.7C246.3 32.8 235.2 32 224 32C100.3 32 0 132.3 0 256S100.3 480 224 480c51.3 0 98.6-17.3 136.4-46.3c8.3-6.4 16.1-13.3 23.4-20.7c-9.6 2.5-19.5 4.3-29.7 5.3c-6.2 .6-12.6 .9-19 .9c-105.8 0-191.5-86-191.5-192c0-78.9 47.5-146.7 115.4-176.3c9.2-4 18.7-7.3 28.5-9.8zm-58 6.9c-61.1 36.2-102 102.9-102 179.1c0 113 90 205.1 202.1 207.9C298.8 453.5 262.6 464 224 464C109.1 464 16 370.9 16 256S109.1 48 224 48c1.9 0 3.8 0 5.6 .1z" />
    </Icon>
);

export default Moon;