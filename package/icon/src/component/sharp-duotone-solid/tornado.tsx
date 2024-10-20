
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tornado` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tornado?s=sharp-duotone-solid tornado}
 * @preview ![tornado](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tornado.svg)
 */
const Tornado: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L416 0l0 32L370.8 77.2c-5.5 5.5-9.9 11.9-13 18.8L5 96C1.7 79.6 0 62.7 0 45.6L0 0zM13.6 128l338.6 0c1 12 5.4 23.5 12.6 33.1L412 224 72.4 224c-26.5-27.3-46.6-60.1-58.8-96zm96.6 128l323.1 0c9.6 19.1 14.7 40.3 14.7 61.9c0 11.6-1.5 23.1-4.3 34.1l-178.6 0c-6.7-6.6-14.3-12.4-22.5-17.3L126.2 266.2c-5.5-3.2-10.8-6.6-16-10.2zM288 384l143.1 0c-8.6 15.7-20.3 29.8-34.7 41.3L288 512l9.8-59c3.9-23.5 .5-47.5-9.9-69z" />
        <path d="M13.6 128C10.1 117.6 7.2 106.9 5 96l352.8 0c-3.8 8.3-5.8 17.3-5.8 26.6c0 1.8 .1 3.6 .2 5.4L13.6 128zm96.6 128c-13.7-9.5-26.3-20.2-37.8-32L412 224l8.5 11.3c4.9 6.5 9.2 13.5 12.8 20.7l-323.1 0zM288 384c-.2-.5-.5-1-.7-1.5c-5.7-11.4-13.2-21.7-22.1-30.5l178.6 0c-2.9 11.2-7.1 21.9-12.6 32L288 384z" />
    </Icon>
);

export default Tornado;