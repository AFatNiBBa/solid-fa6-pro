
import { Icon } from "../../index";

/**
 * A component that renders the `chestnut` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chestnut?s=thin chestnut}
 * @preview ![chestnut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chestnut.svg)
 */
const Chestnut: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M340 152c-14.8-14.8-30.9-28.3-47.6-42c-2.8-2.3-5.6-4.6-8.5-7c0 0 0 0 0 0c-13.9-11.4-28.2-23-41.8-35.4C234.3 60.5 228 54 224 48c-4 6-10.3 12.5-18.1 19.6C192.2 80 177.9 91.6 164 103c0 0 0 0 0 0c-2.8 2.3-5.7 4.6-8.5 7c-16.7 13.7-32.7 27.2-47.6 42C60 200 16 264 16 352c0 5.4 .4 10.8 1.1 16l413.7 0c.7-5.2 1.1-10.6 1.1-16c0-88-44-152-92-200zM20.6 384c13.8 46.3 56.6 80 107.4 80l192 0c50.7 0 93.6-33.7 107.4-80L20.6 384zM351.3 140.7C400.8 190.2 448 258 448 352c0 70.7-57.3 128-128 128l-192 0C57.3 480 0 422.7 0 352c0-94 47.2-161.8 96.7-211.3c18.1-18.1 37.7-34.1 57.3-50.2c13.9-11.4 27.8-22.7 41.1-34.8c7.6-6.9 12.7-12.3 15.5-16.6c3-4.5 8-7.1 13.3-7.1s10.3 2.7 13.3 7.1c2.9 4.3 7.9 9.7 15.5 16.6c13.3 12.1 27.2 23.4 41.1 34.8c19.6 16.1 39.3 32.1 57.3 50.2z" />
    </Icon>
);

export default Chestnut;