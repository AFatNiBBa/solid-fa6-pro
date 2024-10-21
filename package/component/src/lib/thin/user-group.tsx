
import { Icon } from "../../index";

/**
 * A component that renders the `user-group` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group?s=thin user-group}
 * @preview ![user-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-group.svg)
 */
const UserGroup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 128a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zM16 482.3C16 392.7 88.7 320 178.3 320l91.4 0C359.3 320 432 392.7 432 482.3c0 7.6-6.1 13.7-13.7 13.7L29.7 496c-7.6 0-13.7-6.1-13.7-13.7zM224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0zm431 208c17 0 30.7-13.8 30.7-30.7C640 392.2 567.8 320 478.7 320l-61.4 0c-4.4 0-8.8 .2-13.2 .5c5.8 4.9 11.4 10 16.7 15.5l57.9 0C559 336 624 401 624 481.3c0 8.1-6.6 14.7-14.7 14.7l-130.8 0c-1.3 5.7-3.4 11-6.1 16l136.9 0zM432 256c61.9 0 112-50.1 112-112s-50.1-112-112-112c-24.8 0-47.7 8.1-66.3 21.7c2.5 4.8 4.8 9.8 6.9 14.9C388.9 55.7 409.6 48 432 48c53 0 96 43 96 96s-43 96-96 96c-27.7 0-52.7-11.8-70.2-30.6c-2.8 4.7-5.8 9.3-9.1 13.7C373 243.4 401 256 432 256z" />
    </Icon>
);

export default UserGroup;