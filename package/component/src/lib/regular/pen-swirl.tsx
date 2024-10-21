
import { Icon } from "../../index";

/**
 * A component that renders the `pen-swirl` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-swirl?s=regular pen-swirl}
 * @preview ![pen-swirl](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pen-swirl.svg)
 */
const PenSwirl: typeof Icon = x => (
    <Icon {...x}>
        <path d="M441.2 59.1L453.1 71c9.4 9.4 9.4 24.6 0 33.9L432 126.1 386.3 80.4l20.8-21.1c9.4-9.5 24.6-9.5 34.1-.1zM231.9 236.8L352.6 114.5 398.1 160 276.6 281.6c-3.3 3.3-7.5 5.6-12 6.5L215 298.5l10.4-49.7c.9-4.5 3.2-8.7 6.4-11.9zM373 25.5L197.7 203.1c-9.7 9.8-16.4 22.3-19.2 35.8l-18 85.7c-1.7 7.9 .8 16.2 6.5 21.9s14 8.2 21.9 6.5l85.5-17.9c13.7-2.9 26.3-9.7 36.1-19.6L487.1 138.9c28.1-28.1 28.1-73.7 0-101.8L475.1 25.2C446.9-3.1 401-2.9 373 25.5zm-48.3-7.9C302.9 11.4 279.8 8 256 8C119 8 8 119 8 256S119 504 256 504c13.3 0 24-10.7 24-24s-10.7-24-24-24C145.5 456 56 366.5 56 256S145.5 56 256 56c9.7 0 19.3 .7 28.7 2l40-40.4zM454.1 228.4c1.2 9 1.9 18.2 1.9 27.6c0 57.4-46.6 104-104 104c-13.3 0-24 10.7-24 24s10.7 24 24 24c83.9 0 152-68.1 152-152c0-23.6-3.3-46.4-9.4-68l-40.4 40.5z" />
    </Icon>
);

export default PenSwirl;