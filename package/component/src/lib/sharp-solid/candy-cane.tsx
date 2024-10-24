
import { Icon } from "../../index";

/**
 * A component that renders the `candy-cane` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-cane?s=sharp-solid candy-cane}
 * @preview ![candy-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/candy-cane.svg)
 */
const CandyCane: typeof Icon = x => (
    <Icon {...x}>
        <path d="M348.8 131.5c3.7-2.3 7.9-3.5 12.2-3.5c12.7 0 23 10.3 23 23l0 5.6c0 9.9-5.1 19.1-13.5 24.3L14.5 403.5 82.4 512l356-222.5c45.8-28.6 73.6-78.8 73.6-132.8l0-5.6C512 67.6 444.4 0 361 0c-28.3 0-56 8-80 23L200.4 73.3l67.8 108.5 80.5-50.3zM298.4 49.8c9.2-5.7 19.1-10.1 29.4-13.1L348 97.5c-5.7 1.4-11.2 3.7-16.3 6.8l-12.6 7.9L298.4 49.8zm88.5 52.7l46.2-46.2c8.5 6.5 16.1 14.1 22.6 22.6l-46.2 46.2c-5.1-9.6-13-17.5-22.6-22.6zm28.9 59.3l61.6 20.5c-2.2 10.5-5.8 20.7-10.5 30.2l-62-20.7c6.2-8.8 10.1-19.1 11-30.1zm-86.1 82.5l60.4 37.7-30.2 18.9-60.4-37.7 30.2-18.9zm-107.2 67l60.4 37.7-30.2 18.9-60.4-37.7 30.2-18.9zM119.3 375.7l60.4 37.7-30.2 18.9L89.1 394.6l30.2-18.9z" />
    </Icon>
);

export default CandyCane;