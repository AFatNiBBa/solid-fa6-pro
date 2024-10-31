
import { Icon } from "../../index";

/**
 * A component that renders the `person-hiking` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-hiking?s=regular person-hiking}
 * @preview ![person-hiking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-hiking.svg)
 */
const PersonHiking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M288 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM136.5 125.8c3.8-15.1-7.7-29.8-23.3-29.8l-4.2 0C73 96 41.4 120.1 31.9 155L7 246.4c-3.7 13.7 5.2 27.7 19.2 30l47.9 8c12.3 2.1 24.2-5.7 27.2-17.9l35.2-140.7zM384 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24-27.2 0-28.7-43.1c-11.2-16.9-28.6-28.7-48.5-32.9c-32-6.9-63.6 13.3-70.9 45.2l-19.8 86.5c-4.7 20.4 2.4 41.7 18.4 55.2L240 387.1 240 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104.6c0-11.8-5.2-22.9-14.2-30.5l-27.5-23.2 22.4-95.2 2.5 3.7c7.4 11.1 19.9 17.8 33.3 17.8l31.4 0 0 232c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304zm-162.4-5.1c3.6 .8 7 2.2 10 4.1L205.3 294.9l-14.9-12.6c-2.3-1.9-3.3-5-2.6-7.9l19.8-86.5c1.4-6.3 7.7-10.3 14.1-9zM80.9 481.5c-3.6 12.8 3.8 26 16.6 29.6s26-3.8 29.6-16.6l36.7-130-24.8-21c-5.6-4.7-10.5-10.1-14.6-15.8L80.9 481.5z" />
    </Icon>
);

export default PersonHiking;