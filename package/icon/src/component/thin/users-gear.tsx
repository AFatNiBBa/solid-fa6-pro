
import { Icon } from "../../index";

/**
 * A component that renders the `users-gear` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-gear?s=thin users-gear}
 * @preview ![users-gear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/users-gear.svg)
 */
const UsersGear: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 80A64 64 0 1 0 80 80a64 64 0 1 0 128 0zM64 80a80 80 0 1 1 160 0A80 80 0 1 1 64 80zM320 304a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-176a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM261.3 368C196.5 368 144 420.5 144 485.3c0 5.9 4.8 10.7 10.7 10.7l246.5 0c12.6 8.5 27.4 11.5 41.3 10c.9 2 1.9 4.1 3 6l-290.9 0c-14.7 0-26.7-11.9-26.7-26.7C128 411.7 187.7 352 261.3 352l98.7 0c.4 5.6 1.6 10.9 3.5 16l-102.2 0zM536 192c54.1 0 98.6 41.3 103.5 94.1l-.8-1c-5.5-7-12-12.4-19-16.2c-11.4-35.4-44.6-61-83.8-61l-89 0c-.7-5.4-1.7-10.8-3-16l92 0zm-24-48a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM193 208l-89 0c-48.6 0-88 39.4-88 88c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-57.4 46.6-104 104-104l92 0c-1.3 5.2-2.4 10.6-3 16zm303 65.1l0 26c0 3.4-2.1 6.4-5.3 7.5c-13.1 4.6-24.3 11.1-34.9 20.2c-2.6 2.2-6.3 2.5-9.2 .8l-22.5-13c-2.9 3.7-5.6 7.5-8 11.5l-2.1 3.7c-2.2 4-4.2 8.2-5.9 12.5l22.5 13c2.9 1.7 4.5 5 3.9 8.4c-1.3 7.1-2.4 13.7-2.4 20.2s1 13.1 2.4 20.2c.6 3.3-.9 6.7-3.9 8.4l-22.5 13c1.7 4.3 3.7 8.4 5.9 12.4l2.2 3.8c2.4 4 5.1 7.8 7.9 11.5l22.5-13c2.9-1.7 6.6-1.4 9.2 .9c10.6 9.1 21.8 15.6 35 20.2c3.2 1.1 5.3 4.2 5.3 7.5l0 26c5.2 .7 10.6 1.1 16 1.1s10.8-.4 16-1.1l0-26c0-3.4 2.1-6.4 5.3-7.5c13.1-4.6 24.3-11.1 34.9-20.2c2.6-2.2 6.3-2.5 9.2-.9l22.5 13c2.9-3.6 5.5-7.5 7.9-11.4l2.2-3.9c2.2-4 4.2-8.1 5.9-12.4l-22.5-13c-2.9-1.7-4.5-5-3.9-8.4c1.3-7.1 2.4-13.7 2.4-20.2s-1-13.1-2.4-20.2c-.6-3.3 .9-6.7 3.9-8.4l22.5-13c-1.7-4.3-3.7-8.4-5.9-12.4l-2.2-3.7c-2.4-4-5.1-7.9-8-11.5l-22.5 13c-2.9 1.7-6.6 1.4-9.2-.8c-10.6-9.1-21.8-15.6-34.9-20.2c-3.2-1.1-5.3-4.2-5.3-7.5l0-26c-5.2-.7-10.6-1.1-16-1.1s-10.8 .4-16 1.1zm-3.9-15.6c6.5-1 13.1-1.5 19.9-1.5s13.4 .5 19.9 1.5c7.1 1.1 12.1 7.5 12.1 14.9l0 21.2c11 4.4 20.9 10.2 30.3 17.5l18.3-10.6c6.4-3.7 14.5-2.5 19 3c3.7 4.6 7.1 9.4 10.1 14.5l.1 .1s0 0 0 0L624 322l.1 .1s0 0 0 0c2.8 5.1 5.3 10.3 7.4 15.8c2.6 6.7-.4 14.2-6.8 18l-18.3 10.6c.9 5.6 1.6 11.5 1.6 17.5s-.7 11.9-1.6 17.5l18.3 10.6c6.4 3.7 9.4 11.3 6.8 17.9c-2.1 5.4-4.5 10.7-7.3 15.7l-.1 .1s0 0 0 0l-2.3 4-.1 .1s0 0 0 0c-3 5-6.4 9.8-10.1 14.4c-4.5 5.6-12.5 6.8-19 3l-18.3-10.6c-9.3 7.3-19.2 13.1-30.3 17.5l0 21.2c0 7.4-5.1 13.8-12.1 14.9c-6.5 1-13.1 1.5-19.9 1.5s-13.4-.5-19.9-1.5c-7.1-1.1-12.1-7.5-12.1-14.9l0-21.2c-11-4.4-20.9-10.2-30.3-17.5l-18.3 10.6c-6.4 3.7-14.5 2.5-19-3c-3.7-4.6-7.1-9.4-10.1-14.4l-.1-.1s0 0 0 0l-2.3-4-.1-.1s0 0 0 0c-2.8-5-5.2-10.3-7.3-15.7c-2.6-6.7 .4-14.2 6.8-17.9l18.3-10.6c-.9-5.6-1.6-11.5-1.6-17.5s.7-11.9 1.6-17.5l-18.3-10.6c-6.4-3.7-9.4-11.3-6.8-17.9c2.1-5.5 4.6-10.8 7.4-15.8l.1-.1s0 0 0 0l2.2-3.8 .1-.1s0 0 0 0c3.1-5.1 6.5-9.9 10.2-14.5c4.5-5.6 12.5-6.8 19-3l18.3 10.6c9.3-7.3 19.2-13.1 30.3-17.5l0-21.2c0-7.4 5.1-13.8 12.1-14.9zM512 408a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-64a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
    </Icon>
);

export default UsersGear;