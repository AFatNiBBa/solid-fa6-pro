
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-circle-question` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-question?s=sharp-duotone-solid person-circle-question}
 * @preview ![person-circle-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-circle-question.svg)
 */
const PersonCircleQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M.2 270.8l53.9 34.4 33.8-53L88 480l0 32 64 0 0-32 0-128 16 0 0 128 0 32 64 0 0-32 0-227.8 33.8 53 2.3-1.4c8.4-21.4 20.8-40.7 36.3-57L238 142.8 228.6 128l-17.5 0-102.2 0-17.5 0L82 142.8 .2 270.8zM112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm80-46.4l0 6.4 32 0 0-6.4c0-5.3 4.3-9.6 9.6-9.6l40.5 0c7.7 0 13.9 6.2 13.9 13.9c0 5.2-2.9 9.9-7.4 12.3l-32 16.8-8.6 4.5 0 9.7 0 6.8 0 16 32 0 0-13.1 23.5-12.3c10.2-5.4 17.8-14.2 21.7-24.6l2.9 0 0-16c0-25.4-20.6-45.9-45.9-45.9l-40.5 0c-23 0-41.6 18.6-41.6 41.6zM448 448l0-32-32 0 0 32 32 0z" />
    </Icon>
);

export default PersonCircleQuestion;