
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tornado` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tornado?s=duotone tornado}
 * @preview ![tornado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tornado.svg)
 */
const Tornado: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32C0 14.3 14.3 0 32 0L393.4 0C405.9 0 416 10.1 416 22.6c0 6-2.4 11.8-6.6 16L370.8 77.2c-5.5 5.5-9.9 11.9-13 18.8L5 96C1.7 79.6 0 62.7 0 45.6L0 32zm13.6 96l338.6 0c1 12 5.4 23.5 12.6 33.1L412 224 72.4 224c-26.5-27.3-46.6-60.1-58.8-96zm96.6 128l322.5 0c10 20.4 15.3 43 15.3 65.9c0 10.2-1 20.2-3 30.1l-179.8 0c-6.7-6.6-14.3-12.4-22.5-17.3L126.2 266.2c-5.5-3.2-10.8-6.6-16-10.2zM288 384l146.6 0c-7.4 16.2-17.6 31.1-30.4 43.9l-78.2 78.2c-3.8 3.8-8.9 5.9-14.2 5.9c-12.4 0-21.8-11.1-19.8-23.4l5.9-35.7c3.9-23.5 .5-47.5-9.9-69z" />
        <path d="M13.6 128C10.1 117.6 7.2 106.9 5 96l352.8 0c-3.8 8.3-5.8 17.3-5.8 26.6c0 1.8 .1 3.6 .2 5.4L13.6 128zm96.6 128c-13.7-9.5-26.3-20.2-37.8-32L412 224l6 8c5.7 7.5 10.6 15.6 14.7 24l-322.5 0zM288 384c-.2-.5-.5-1-.7-1.5c-5.7-11.4-13.2-21.7-22.1-30.5L445 352c-2.3 11-5.8 21.8-10.4 32L288 384z" />
    </Icon>
);

export default Tornado;