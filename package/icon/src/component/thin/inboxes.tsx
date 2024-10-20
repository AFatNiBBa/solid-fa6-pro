
import { Icon } from "../../index";

/**
 * A component that renders the `inboxes` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inboxes?s=thin inboxes}
 * @preview ![inboxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/inboxes.svg)
 */
const Inboxes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M21.5 160l102.7 0c15.2 0 29 8.6 35.8 22.1l14.3 28.6c4.1 8.1 12.4 13.3 21.5 13.3l120.4 0c9.1 0 17.4-5.1 21.5-13.3L352 182.1c6.8-13.6 20.6-22.1 35.8-22.1l102.7 0L430.6 34.2C425.3 23.1 414 16 401.7 16L110.3 16C98 16 86.7 23.1 81.4 34.2L21.5 160zm474.3 16l-108.1 0c-9.1 0-17.4 5.1-21.5 13.3L352 217.9c-6.8 13.6-20.6 22.1-35.8 22.1l-120.4 0c-15.2 0-29-8.6-35.8-22.1l-14.3-28.6c-4.1-8.1-12.4-13.3-21.5-13.3L16.1 176c-.1 .9-.1 1.9-.1 2.8L16 272c0 17.7 14.3 32 32 32l416 0c17.7 0 32-14.3 32-32l0-93.2c0-1 0-1.9-.1-2.8zM4.7 158.2L67 27.4C74.9 10.6 91.8 0 110.3 0L401.7 0c18.5 0 35.4 10.6 43.3 27.4l62.3 130.8c3.1 6.4 4.7 13.5 4.7 20.6l0 93.2c0 26.5-21.5 48-48 48L48 320c-26.5 0-48-21.5-48-48l0-93.2c0-7.1 1.6-14.2 4.7-20.6zM122.3 368L48 368c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l416 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-74.3 0c-12.1 0-23.2 6.8-28.6 17.7l-9.9 19.8C343 421.7 326.4 432 308.2 432l-104.4 0c-18.2 0-34.8-10.3-42.9-26.5L151 385.7c-5.4-10.8-16.5-17.7-28.6-17.7zm214.5 30.3l9.9-19.8c8.1-16.3 24.8-26.5 42.9-26.5l74.3 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l74.3 0c18.2 0 34.8 10.3 42.9 26.5l9.9 19.8c5.4 10.8 16.5 17.7 28.6 17.7l104.4 0c12.1 0 23.2-6.8 28.6-17.7z" />
    </Icon>
);

export default Inboxes;