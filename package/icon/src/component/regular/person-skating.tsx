
import { Icon } from "../../index";

/**
 * A component that renders the `person-skating` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-skating?s=regular person-skating}
 * @preview ![person-skating](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-skating.svg)
 */
const PersonSkating: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM128 120c0-13.3 10.7-24 24-24l169.4 0c35.6 0 53.5 43.1 28.3 68.3L268.9 245l69.3 60c8.8 7.6 13.8 18.6 13.8 30.2l0 88.7c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-85-85.3-74c-24.8-21.5-26-59.7-1.9-82.5c11.9-11.2 26.8-25.1 41.6-38.5L152 144c-13.3 0-24-10.7-24-24zM79 367L179.4 266.6c4.8 8.5 11.2 16.4 19 23.2l13.7 11.9L113 401c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9zm324.9 81.4c8.6 2.1 13.8 10.8 11.6 19.4l-.4 1.7c-6.2 24.9-28.6 42.4-54.3 42.4L272 512c-8.8 0-16-7.2-16-16s7.2-16 16-16l88.8 0c11 0 20.6-7.5 23.3-18.2l.4-1.7c2.1-8.6 10.8-13.8 19.4-11.6zM135.2 478.3l-6.2 3.1c-21.6 10.8-47.6 6.6-64.6-10.5L4.7 411.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l59.6 59.6c7.3 7.3 18.5 9.1 27.7 4.5l6.2-3.1c7.9-4 17.5-.7 21.5 7.2s.7 17.5-7.2 21.5z" />
    </Icon>
);

export default PersonSkating;