
import { Icon } from "../../index";

/**
 * A component that renders the `beer-mug` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug?s=sharp-solid beer-mug}
 * @preview ![beer-mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/beer-mug.svg)
 */
const BeerMug: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 160c-32.5 0-60.5-19.4-73-47.2C123.8 131.5 103.4 144 80 144c-35.3 0-64-28.7-64-64s28.7-64 64-64c23.4 0 43.8 12.5 55 31.2C147.5 19.4 175.5 0 208 0s60.5 19.4 73 47.2C292.2 28.5 312.6 16 336 16c35.3 0 64 28.7 64 64s-28.7 64-64 64c-23.4 0-43.8-12.5-55-31.2c-12.5 27.8-40.5 47.2-73 47.2zM32 512l0-348.8C46.1 171.3 62.5 176 80 176c18.8 0 36.2-5.4 51-14.7c20.1 19 47.1 30.7 77 30.7s56.9-11.7 77-30.7c14.8 9.3 32.3 14.7 51 14.7c19.6 0 37.9-5.9 53.1-16l90.9 0 32 0 0 32 0 176 0 20.8-19 8.4L384 445.7l0 66.3L32 512zM384 375.6l64-28.4L448 224l-64 0 0 151.6zM160 240l0-16-32 0 0 16 0 160 0 16 32 0 0-16 0-160zm64 0l0-16-32 0 0 16 0 160 0 16 32 0 0-16 0-160zm64 0l0-16-32 0 0 16 0 160 0 16 32 0 0-16 0-160z" />
    </Icon>
);

export default BeerMug;