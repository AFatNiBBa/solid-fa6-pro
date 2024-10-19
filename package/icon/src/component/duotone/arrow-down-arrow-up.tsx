
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-arrow-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-arrow-up?s=duotone arrow-down-arrow-up}
 * @preview ![arrow-down-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQzMS41OTEgMTM4LjAzOUwzNDMuNTkzIDQxLjk0NUMzMzEuNDY4IDI4LjY4NCAzMDguNTMxIDI4LjY4NCAyOTYuNDA2IDQxLjk0NUwyMDguNDA4IDEzOC4wMzlDMTk2LjQ3MiAxNTEuMDg2IDE5Ny4zNDcgMTcxLjM1MiAyMTAuMzc3IDE4My4zMDVDMjIzLjM5MiAxOTUuMjUgMjQzLjY0MiAxOTQuMzQ0IDI1NS41OTUgMTgxLjMzMkwyODggMTQ1LjkzOFY0NDcuOTY5QzI4OCA0NjUuNjcyIDMwMi4zMjggNDgwIDMyMCA0ODBTMzUyIDQ2NS42NzIgMzUyIDQ0Ny45NjlWMTQ1LjkzOEwzODQuNDA0IDE4MS4zMzJDMzk1LjgyNiAxOTMuNzg1IDQxNi4wMzEgMTk1Ljc2NiA0MjkuNjIzIDE4My4zMDVDNDQyLjY1MiAxNzEuMzUyIDQ0My41MjcgMTUxLjA4NiA0MzEuNTkxIDEzOC4wMzlaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTIzNy42MjMgMzI4LjY5NUMyNTAuNjUyIDM0MC42NDggMjUxLjUyNyAzNjAuOTE0IDIzOS41OTEgMzczLjk2MUwxNTEuNTkzIDQ3MC4wNTVDMTM5LjQ2OCA0ODMuMzEyIDExNi41MzEgNDgzLjMxMiAxMDQuNDA2IDQ3MC4wNTVMMTYuNDA4IDM3My45NjFDNC40NzIgMzYwLjkxNCA1LjM0NyAzNDAuNjQ4IDE4LjM3NyAzMjguNjk1QzMxLjk2OCAzMTYuMjM0IDUyLjE3MyAzMTguMjExIDYzLjU5NSAzMzAuNjY0TDk2IDM2Ni4wNjJWNjQuMDMxQzk2IDQ2LjMyOCAxMTAuMzI4IDMyIDEyOCAzMlMxNjAgNDYuMzI4IDE2MCA2NC4wMzFWMzY2LjA2M0wxOTIuNDA0IDMzMC42NjRDMjA0LjM1NyAzMTcuNjU2IDIyNC42MDcgMzE2Ljc1IDIzNy42MjMgMzI4LjY5NVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowDownArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M431.591 138.039L343.593 41.945C331.468 28.684 308.531 28.684 296.406 41.945L208.408 138.039C196.472 151.086 197.347 171.352 210.377 183.305C223.392 195.25 243.642 194.344 255.595 181.332L288 145.938V447.969C288 465.672 302.328 480 320 480S352 465.672 352 447.969V145.938L384.404 181.332C395.826 193.785 416.031 195.766 429.623 183.305C442.652 171.352 443.527 151.086 431.591 138.039Z" />
            <path d="M237.623 328.695C250.652 340.648 251.527 360.914 239.591 373.961L151.593 470.055C139.468 483.312 116.531 483.312 104.406 470.055L16.408 373.961C4.472 360.914 5.347 340.648 18.377 328.695C31.968 316.234 52.173 318.211 63.595 330.664L96 366.062V64.031C96 46.328 110.328 32 128 32S160 46.328 160 64.031V366.063L192.404 330.664C204.357 317.656 224.607 316.75 237.623 328.695Z" />
        </Icon>
    </>
}