
import { Icon } from "../../index";

/**
 * A component that renders the `user-shield` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shield?s=thin user-shield}
 * @preview ![user-shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-shield.svg)
 */
const UserShield: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 128a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm240 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM16 482.3C16 392.7 88.7 320 178.3 320l91.4 0c18.3 0 35.8 3 52.2 8.6c-.7-6-1.2-11.7-1.5-17.3c-16.1-4.8-33.1-7.3-50.7-7.3l-91.4 0C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c1.8 0 3.5-.2 5.3-.5c-6.8-4.9-13.3-10.1-19.3-15.5L29.7 496c-7.6 0-13.7-6.1-13.7-13.7zM373 288.6l115-46 0 250.7c-96.1-42.9-120-138-120-197.3c0-3.3 2-6.2 5-7.4zM624 296c0 59.3-23.9 154.4-120 197.3l0-250.7 115 46c3 1.2 5 4.2 5 7.4zM504.9 225.7c-5.7-2.3-12.1-2.3-17.8 0l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48z" />
    </Icon>
);

export default UserShield;