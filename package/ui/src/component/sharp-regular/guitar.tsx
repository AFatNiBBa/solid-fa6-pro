
import { Icon } from "../../index";

/**
 * A component that renders the `guitar` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/guitar?s=sharp-regular guitar}
 * @preview ![guitar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/guitar.svg)
 */
const Guitar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M363.3 114.7L376 64 448 0l64 64-64 72-50.7 12.7-43.8 43.8c38.2 50.8 41.4 115.2 4.6 152c-12 12-26.8 19.7-43.2 23.4c-18.1 4.1-33.5 20.8-34.5 39.4c-1.4 27.9-11.7 53.8-31.2 73.4C200.3 529.4 112 520.3 51.8 460.2S-17.4 311.7 31.4 262.8C51 243.2 76.9 233 104.8 231.5c18.5-.9 35.3-16.4 39.4-34.5c3.7-16.4 11.4-31.2 23.4-43.2c36.8-36.8 101.2-33.6 152 4.6l43.8-43.8zm-78.1 78.1c-36-24.5-70.6-18.1-83.8-5c-5 5-8.6 11.5-10.5 19.8c-8.3 37-41.6 69.7-83.8 71.9c-17.6 .9-31.7 7.1-41.9 17.3c-23.9 23.9-27.9 81.2 20.4 129.5s105.6 44.3 129.5 20.4c10.1-10.1 16.4-24.3 17.3-41.9c2.1-42.2 34.9-75.4 71.9-83.8c8.3-1.9 14.8-5.5 19.8-10.5c13.2-13.2 19.6-47.8-5-83.8l-64.8 64.8c1.1 4 1.6 8.1 1.6 12.4c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48c4.3 0 8.5 .6 12.4 1.6l64.8-64.8z" />
    </Icon>
);

export default Guitar;