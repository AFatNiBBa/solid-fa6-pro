
import { Icon } from "../../index";

/**
 * A component that renders the `trash-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-slash?s=regular trash-slash}
 * @preview ![trash-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/trash-slash.svg)
 */
const TrashSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L491.3 359.8 508.4 128l11.6 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0-48.1 0-13.7 0L413.5 24.9C403.1 9.4 385.6 0 366.9 0L273.1 0c-18.7 0-36.2 9.4-46.6 24.9L189.8 80l-13.7 0-41.8 0L38.8 5.1zM195.6 128l264.7 0L445.8 324.1 195.6 128zM479.2 473.6l-42.1-33.1-.6 8.7c-.6 8.4-7.6 14.8-16 14.8l-201.1 0c-8.4 0-15.3-6.5-16-14.8L188.3 244.4l-51.1-40.3 18.4 248.6c2.5 33.4 30.3 59.3 63.8 59.3l201.1 0c26.1 0 48.8-15.7 58.7-38.4zM273.1 48l93.7 0c2.7 0 5.2 1.3 6.7 3.6l19 28.4-145 0 19-28.4c1.5-2.2 4-3.6 6.7-3.6z" />
    </Icon>
);

export default TrashSlash;