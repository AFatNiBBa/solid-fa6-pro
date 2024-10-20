
import { Icon } from "../../index";

/**
 * A component that renders the `broccoli` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broccoli?s=sharp-regular broccoli}
 * @preview ![broccoli](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/broccoli.svg)
 */
const Broccoli: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c-37.2 0-69.5 21.2-85.4 52.1C162.2 49.4 153.3 48 144 48c-48.6 0-88 39.4-88 88l0 32.7C23 183.9 0 217.2 0 256c0 53 43 96 96 96l320 0c53 0 96-43 96-96c0-39.2-23.4-72.8-57-87.8l1-31.5 0-.4 0-.4c0-48.6-39.4-88-88-88c-9.3 0-18.2 1.4-26.6 4.1C325.5 21.2 293.2 0 256 0zM208.4 89.7C211.5 66.2 231.6 48 256 48s44.5 18.2 47.6 41.7l5.6 42.9 33.4-27.5c6.9-5.7 15.7-9.1 25.4-9.1c22 0 39.8 17.7 40 39.7l-1.6 49-.7 20.3 19.9 4c21.9 4.4 38.4 23.8 38.4 47c0 26.5-21.5 48-48 48L96 304c-26.5 0-48-21.5-48-48c0-22.8 15.9-42 37.3-46.8l18.7-4.2 0-19.2 0-49.8c0-22.1 17.9-40 40-40c9.7 0 18.5 3.4 25.4 9.1l33.4 27.5 5.6-42.9zM200 512l112 0c18.4-55.3 44.9-100.1 63.9-128L280 384l-24 48-24-48-95.9 0c19.1 27.9 45.5 72.7 63.9 128z" />
    </Icon>
);

export default Broccoli;