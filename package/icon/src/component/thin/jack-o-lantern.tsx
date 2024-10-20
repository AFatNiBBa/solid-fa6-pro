
import { Icon } from "../../index";

/**
 * A component that renders the `jack-o-lantern` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jack-o-lantern?s=thin jack-o-lantern}
 * @preview ![jack-o-lantern](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/jack-o-lantern.svg)
 */
const JackOLantern: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M291.3 16c-.5 0-1 .3-1.2 .8L254.4 98.5c-6.5 1-12.8 2.2-19.1 3.7l40.2-91.9c2.8-6.3 9-10.4 15.8-10.4l1.2 0c2.3 0 4.7 .5 6.8 1.4l42.3 18.1c6.4 2.7 10.5 9 10.5 15.9l0 69.9c-5.2-1.6-10.6-3-16-4.1l0-65.8c0-.5-.3-1-.8-1.2L293 16.1c-.2-.1-.3-.1-.5-.1l-1.2 0zM188.4 119.5c-6.5 3.3-12.9 7-19 10.9c-7-1.6-14.2-2.4-21.5-2.4c-35.5 0-68.3 19.7-92.5 52.9S16 260.5 16 312s15.2 97.8 39.5 131c24.2 33.2 57.1 53 92.5 53c23.5 0 45.7-8.6 65-24c2.9-2.3 7-2.3 9.9 0c19.4 15.4 41.6 24 65 24s45.7-8.6 65-24c2.9-2.3 7-2.3 9.9 0c19.4 15.4 41.6 24 65 24c35.5 0 68.3-19.7 92.5-53c24.2-33.2 39.5-79.5 39.5-131s-15.2-97.8-39.5-131.1S463.5 128 428 128c-7.3 0-14.5 .8-21.5 2.4c-6.1-3.9-12.4-7.6-19-10.9c12.8-4.9 26.4-7.5 40.4-7.5c41.8 0 79 23.3 105.5 59.5S576 257.5 576 312s-16.1 104.2-42.5 140.5S469.8 512 428 512c-25.5 0-49.3-8.7-70-23.6c-20.7 15-44.5 23.6-70 23.6s-49.3-8.7-70-23.6c-20.7 15-44.5 23.6-70 23.6c-41.8 0-79-23.3-105.5-59.5S0 366.5 0 312s16.1-104.2 42.5-140.5S106.2 112 148 112c14.1 0 27.6 2.6 40.4 7.5zm-30.1 85.4c-2.7 3.5-7.7 4.2-11.2 1.5s-4.2-7.7-1.5-11.2C176.8 154.4 229.1 128 288 128s111.2 26.4 142.3 67.1c2.7 3.5 2 8.5-1.5 11.2s-8.5 2-11.2-1.5C389.6 168.3 342.2 144 288 144s-101.6 24.3-129.7 60.9zM448 326.7c-23.1 13.6-76.7 39.5-152 41.2l0 8.1c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-12.6c-50.1-8.4-86.2-26.2-104-36.7c-4.3-2.5-9.5-1.8-12.5 1.1c-2 2-2.4 4.2-1.9 6c3.6 12.4 14 38.7 42.5 60.9c4.3-6.4 11.6-10.7 20-10.7l16 0c13.3 0 24 10.7 24 24l0 15.4c19.9 5.3 43.6 8.6 72 8.6s52.1-3.3 72-8.6l0-15.4c0-13.3 10.7-24 24-24l16 0c8.3 0 15.7 4.2 20 10.7c28.4-22.2 38.9-48.5 42.5-60.9c.5-1.7 0-4-1.9-6c-3-3-8.2-3.7-12.5-1.1zm23.8-10.2c5.4 5.4 8.4 13.5 6 21.7c-4.6 15.9-18.4 49.8-57.4 75.9c-2.4 1.6-5.5 1.8-8.1 .5s-4.2-3.9-4.4-6.8c-.2-4.3-3.7-7.7-8-7.7l-16 0c-4.4 0-8 3.6-8 8l0 21.5c0 3.5-2.3 6.7-5.7 7.7C347.6 443.9 320.5 448 288 448s-59.6-4.1-82.3-10.8c-3.4-1-5.7-4.1-5.7-7.7l0-21.5c0-4.4-3.6-8-8-8l-16 0c-4.3 0-7.8 3.4-8 7.7c-.1 2.9-1.8 5.5-4.3 6.8s-5.7 1.1-8.1-.5c-39-26-52.8-60-57.4-75.9c-2.4-8.2 .6-16.3 6-21.7c8.7-8.7 22-9.5 31.9-3.6c17.4 10.2 53.9 28.3 105 35.7c3.9 .6 6.8 3.9 6.8 7.9l0 19.5c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-16c0-4.4 3.6-8 8-8c75.8 0 129.6-26 151.9-39.1c9.9-5.8 23.3-5 31.9 3.6zM240 272l-32-48-32 48 64 0zm-18.7-56.9l32 48c3.3 4.9 3.6 11.2 .8 16.4s-8.2 8.5-14.1 8.5l-64 0c-5.9 0-11.3-3.2-14.1-8.5s-2.5-11.5 .8-16.4l32-48c3-4.5 8-7.1 13.3-7.1s10.3 2.7 13.3 7.1zM368 224l-32 48 64 0-32-48zm0-16c5.4 0 10.3 2.7 13.3 7.1l32 48c3.3 4.9 3.6 11.2 .8 16.4s-8.2 8.5-14.1 8.5l-64 0c-5.9 0-11.3-3.2-14.1-8.5s-2.5-11.5 .8-16.4l32-48c3-4.5 8-7.1 13.3-7.1z" />
    </Icon>
);

export default JackOLantern;