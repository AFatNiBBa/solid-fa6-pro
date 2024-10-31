
import { Icon } from "../../index";

/**
 * A component that renders the `trash-can-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-slash?s=solid trash-can-slash}
 * @preview ![trash-can-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/trash-can-slash.svg)
 */
const TrashCanSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L512 376l0-248-316.4 0L154.8 96 512 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C403.4 6.8 392.3 0 380.2 0L259.8 0c-12.1 0-23.2 6.8-28.6 17.7L224 32l-96 0c-13.4 0-24.8 8.2-29.6 19.8L38.8 5.1zM304 213l0-5c0-8.8 7.2-16 16-16s16 7.2 16 16l0 30L304 213zm96 75.2l0-80.2c0-8.8 7.2-16 16-16s16 7.2 16 16l0 105.3-32-25.1zm97.8 200L431.5 436c-1.8 6.9-8 12-15.5 12c-8.8 0-16-7.2-16-16l0-20.8-64-50.4 0 71.3c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96.5-64-50.4L240 432c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-172.1-80-63L128 448c0 35.3 28.7 64 64 64l256 0c20.1 0 38.1-9.3 49.8-23.8z" />
    </Icon>
);

export default TrashCanSlash;