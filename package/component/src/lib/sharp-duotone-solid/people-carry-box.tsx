
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-carry-box` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-carry-box?s=sharp-duotone-solid people-carry-box}
 * @preview ![people-carry-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/people-carry-box.svg)
 */
const PeopleCarryBox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M224 128l0 110.6 0 76.2 0 5.3 192 0 0-5.4 0-76.2L416 128l-192 0z" />
        <path d="M80 48a48 48 0 1 1 96 0A48 48 0 1 1 80 48zm0 80l48 0 17.1 0 9.5 14.3 60.3 90.5 9.1 5.8 0 76.2-49.3-31.8-5.6-3.6-3.7-5.5L144 241.7l0 65.1 54.6 54.6 7.3 7.3 1.7 10.1 8 48 8 48 4 24 2.2 13.3-64.9 0-.5-2.7-4-24-8-48-6.3-37.9L89.4 342.6 66.7 320C54.7 308 48 291.7 48 274.7L48 160l0-32 32 0zM416 238.4l8.9-5.7 60.3-90.5 9.5-14.3 17.1 0 48 0 32 0 0 32 0 114.7c0 17-6.7 33.3-18.7 45.3l-22.6 22.6-56.8 56.7-6.3 37.9-8 48-4 24-.5 2.7L410 512l2.2-13.3 4-24 8-48 8-48 1.7-10.1 7.3-7.3 54.6-54.6 0-65.1-21.4 32.1-3.7 5.5-5.6 3.6L416 314.6l0-76.2zM52.5 351l51 50.9-33 103.7-2 6.3L1.3 512l8.2-25.7L52.5 351zM559.8 48a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm27.5 303l43 135.2 8.2 25.7-67.2 0-2-6.3L536.3 402l51-50.9z" />
    </Icon>
);

export default PeopleCarryBox;