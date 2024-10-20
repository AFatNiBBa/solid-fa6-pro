
import { Icon } from "../../index";

/**
 * A component that renders the `meteor` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meteor?s=regular meteor}
 * @preview ![meteor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/meteor.svg)
 */
const Meteor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M474.8 0c-5.2 0-10.3 1.1-15 3.2L324 62.9l1.4-18.2c2.5-34.2-36.2-55.5-63.7-35.1L82.7 142.5C30.6 181.2 0 242.7 0 307.5C0 419.8 91 512 203.6 512c65.7 0 127.4-31.8 165.7-85.3L495.6 249.8c19.7-27.6-1.8-65.7-35.6-63.1l-10.7 .8L508.8 52.2c2.1-4.7 3.2-9.8 3.2-15C512 16.7 495.3 0 474.8 0zm-168 122.9l147-64.7L389.2 204.9c-3.4 7.7-2.5 16.7 2.4 23.5s13 10.7 21.4 10.1l33.5-2.6-116.4 163C301 439.7 253.8 464 203.6 464C117.8 464 48 393.6 48 307.5c0-49.7 23.6-96.9 63.4-126.5L276.2 58.6l-3 40.6c-.6 8.4 3.2 16.5 10.1 21.4s15.8 5.8 23.5 2.4zM200 424a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM176 264a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm24 96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Meteor;