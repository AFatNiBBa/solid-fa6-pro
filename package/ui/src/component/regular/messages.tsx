
import { Icon } from "../../index";

/**
 * A component that renders the `messages` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages?s=regular messages}
 * @preview ![messages](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/messages.svg)
 */
const Messages: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 72c0-13.3 10.7-24 24-24l272 0c13.3 0 24 10.7 24 24l0 176c0 13.3-10.7 24-24 24l-128 0c-4.7 0-9.4 1.4-13.3 4L144 315.2l0-19.2c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24-10.7-24-24L48 72zM72 0C32.2 0 0 32.2 0 72L0 248c0 39.8 32.2 72 72 72l24 0 0 40c0 8.9 4.9 17 12.7 21.2s17.3 3.7 24.6-1.2l90-60L344 320c39.8 0 72-32.2 72-72l0-176c0-39.8-32.2-72-72-72L72 0zM256 376c0 39.8 32.2 72 72 72l88.7 0 90 60c7.4 4.9 16.8 5.4 24.6 1.2S544 496.9 544 488l0-40 24 0c39.8 0 72-32.2 72-72l0-176c0-39.8-32.2-72-72-72l-120 0 0 48 120 0c13.3 0 24 10.7 24 24l0 176c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24 10.7-24 24l0 19.2L437.3 404c-3.9-2.6-8.6-4-13.3-4l-96 0c-13.3 0-24-10.7-24-24l0-24-48 0 0 24z" />
    </Icon>
);

export default Messages;