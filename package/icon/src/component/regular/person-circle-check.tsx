
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-check` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-check?s=regular person-circle-check}
 * @preview ![person-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-circle-check.svg)
 */
const PersonCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm32 128.1L144 304l32 0 0-127.9c-.7 0-1.5-.1-2.3-.1l-27.5 0c-.8 0-1.5 0-2.3 .1zM144 352l0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-264.4L52.9 299.8c-6.5 11.5-21.2 15.6-32.7 9.1s-15.6-21.2-9.1-32.7L69.7 172.7c15.6-27.6 44.9-44.7 76.6-44.7l27.5 0c31.7 0 61 17.1 76.6 44.7L297 255.1c-11.7 14-21.3 29.9-28.3 47.1c-.6-.8-1.1-1.6-1.6-2.4L224 223.6 224 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136-32 0zm144 16a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z" />
    </Icon>
);

export default PersonCircleCheck;