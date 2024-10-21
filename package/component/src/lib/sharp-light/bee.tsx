
import { Icon } from "../../index";

/**
 * A component that renders the `bee` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bee?s=sharp-light bee}
 * @preview ![bee](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bee.svg)
 */
const Bee: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M227.3 12.7L216 1.4 193.4 24l11.3 11.3 23.5 23.5C215.6 73 208 91.6 208 112c0 3 .2 6 .5 8.9C185.7 105 157 96 128 96C63 96 0 140.9 0 208c0 61.9 53.6 104.9 112.9 111.2c-.6-5.1-.9-10.2-.9-15.2c0-5.7 .3-11.4 .8-17C66.7 280.9 32 247.6 32 208c0-43.8 42.5-80 96-80c40.8 0 75.2 21.1 89.3 50.5C173.5 203.3 144 250.2 144 304c0 96 144 208 144 208s144-112 144-208c0-53.8-29.5-100.7-73.3-125.5c14-29.5 48.5-50.5 89.3-50.5c53.5 0 96 36.2 96 80c0 39.6-34.7 72.9-80.8 79c.5 5.6 .8 11.3 .8 17c0 5-.3 10.1-.9 15.2C522.4 312.9 576 269.9 576 208c0-67.1-63-112-128-112c-29 0-57.7 9-80.5 24.9c.3-2.9 .5-5.9 .5-8.9c0-20.4-7.6-39-20.2-53.2l23.5-23.5L382.6 24 360 1.4 348.7 12.7 321.9 39.5C311.6 34.7 300.1 32 288 32s-23.6 2.7-33.9 7.5L227.3 12.7zM288 64a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM177.1 288c1.6-11.3 4.9-22.1 9.6-32l202.4 0c4.7 9.9 8 20.7 9.6 32l-221.7 0zm32.5-64c20.2-19.8 47.9-32 78.4-32s58.2 12.2 78.4 32l-156.8 0zm188.6 96c-2.1 9.9-6 20.6-11.7 32l-197.1 0c-5.7-11.4-9.6-22.1-11.7-32l220.4 0zm-31 64c-7.7 11-16.3 21.8-25.2 32L234 416c-8.9-10.2-17.5-21-25.2-32l158.5 0zm-55.4 64c-8.2 8.1-16 15.2-22.6 21.1l-1.2 1.1-1.2-1.1c-6.6-5.9-14.3-13-22.6-21.1l47.6 0z" />
    </Icon>
);

export default Bee;