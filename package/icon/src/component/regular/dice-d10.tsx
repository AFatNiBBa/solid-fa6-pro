
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d10` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d10?s=regular dice-d10}
 * @preview ![dice-d10](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dice-d10.svg)
 */
const DiceD10: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c6.9 0 13.5 3 18 8.2l232 264c4.2 4.8 6.4 11.1 5.9 17.5s-3.4 12.3-8.3 16.5l-232 200c-9 7.8-22.3 7.8-31.3 0l-232-200C3.5 302 .5 296 .1 289.7S1.7 277 6 272.2L238 8.2C242.5 3 249.1 0 256 0zM91.6 247.4l50.9-12 36-86.9L91.6 247.4zM256 86.8L189.7 247 256 291.2 322.3 247 256 86.8zm100.6 195L280 332.8l0 102.8 156.7-135-80-18.8zm63.8-34.3l-86.9-98.9 36 86.9 50.9 12zM232 435.6l0-102.8-76.6-51.1-80 18.8L232 435.6z" />
    </Icon>
);

export default DiceD10;