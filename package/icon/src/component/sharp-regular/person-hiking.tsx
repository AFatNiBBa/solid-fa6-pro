
import { Icon } from "../../index";

/**
 * A component that renders the `person-hiking` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-hiking?s=sharp-regular person-hiking}
 * @preview ![person-hiking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-hiking.svg)
 */
const PersonHiking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M288 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM144 96L48 96 0 272l96 16L144 96zm240 88l0-24-48 0 0 24 0 24-27.2 0L268 146.7l-5.4-8.1-9.5-2-56-12-23.1-5-5.3 23.1-27.7 121c-4.7 20.4 2.4 41.7 18.4 55.2L240 387.1 240 488l0 24 48 0 0-24 0-112 0-11.1-8.5-7.2-33.1-28 22.4-95.2 7.2 10.9 7.1 10.7 12.8 0 40 0 0 232 0 24 48 0 0-24 0-304zM205.3 294.9l-14.9-12.6c-2.3-1.9-3.3-5-2.6-7.9l22.4-97.9 21.9 4.7L205.3 294.9zm-81 32.8L72.3 512l49.9 0 41.6-147.5-24.8-21c-5.6-4.7-10.5-10.1-14.6-15.8z" />
    </Icon>
);

export default PersonHiking;