
import { Icon } from "../../index";

/**
 * A component that renders the `candy-cane` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-cane?s=sharp-light candy-cane}
 * @preview ![candy-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/candy-cane.svg)
 */
const CandyCane: typeof Icon = x => (
    <Icon {...x}>
        <path d="M348 97.5L327.8 36.7C338.5 33.6 349.7 32 361 32c27.1 0 52.1 9.1 72.1 24.3l-46.2 46.2C379.2 98.3 370.3 96 361 96c-4.4 0-8.7 .5-12.9 1.5zm61.5 27.6l46.2-46.2c15.3 20 24.3 45 24.3 72.1l0 5.6c0 8.7-.9 17.3-2.7 25.6l-61.6-20.5c.1-1.7 .2-3.4 .2-5.1l0-5.6c0-9.4-2.3-18.2-6.5-25.9zm57.3 87.4c-10.1 20.2-25.6 37.5-45.4 49.9l-31.3 19.6-60.4-37.7 57.8-36.1c6.9-4.3 12.7-9.9 17.3-16.3l62 20.7zM359.9 300.8l-77 48.1-60.4-37.7 77-48.1 60.4 37.7zm-107.2 67l-73 45.6-60.4-37.7 73-45.6 60.4 37.7zM149.5 432.3l-57 35.6L58.6 413.6l30.5-19.1 60.4 37.7zM298.4 49.8l20.8 62.5-40.8 25.5L244.5 83.4l53.4-33.4c.2-.1 .3-.2 .5-.3zm-3 115.1l53.4-33.4c3.7-2.3 7.9-3.5 12.2-3.5c12.7 0 23 10.3 23 23l0 5.6c0 9.9-5.1 19.1-13.5 24.3L41.7 386.5l-27.1 17 17 27.1 33.9 54.3 17 27.1 27.1-17L438.4 289.5c45.8-28.6 73.6-78.8 73.6-132.8l0-5.6C512 67.6 444.4 0 361 0c-28.3 0-56 8-80 23L227.6 56.3l-27.1 17 17 27.1 33.9 54.3 17 27.1 27.1-17z" />
    </Icon>
);

export default CandyCane;