
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-trend-down` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-trend-down?s=duotone arrow-trend-down}
 * @preview ![arrow-trend-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2Ni43NSAzNTJMMzIwIDIwNS4yNUwyMTQuNjI1IDMxMC42MjVDMjA4LjM3NSAzMTYuODc1IDIwMC4xODggMzIwIDE5MiAzMjBTMTc1LjYyNSAzMTYuODc1IDE2OS4zNzUgMzEwLjYyNUw5LjM3NSAxNTAuNjI1QzMuMTI1IDE0NC4zNzUgMCAxMzYuMTg4IDAgMTI4QzAgMTA5LjcyMSAxNC45NDcgOTYgMzIgOTZDNDAuMTg4IDk2IDQ4LjM3NSA5OS4xMjUgNTQuNjI1IDEwNS4zNzVMMTkyIDI0Mi43NUwyOTcuMzc1IDEzNy4zNzVDMzAzLjYyNSAxMzEuMTI1IDMxMS44MTIgMTI4IDMyMCAxMjhTMzM2LjM3NSAxMzEuMTI1IDM0Mi42MjUgMTM3LjM3NUw1MTIgMzA2Ljc1VjM1Mkg0NjYuNzVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTU0NCA0MTZIMzg0QzM2Ni4zMTIgNDE2IDM1MiA0MDEuNjcyIDM1MiAzODRTMzY2LjMxMiAzNTIgMzg0IDM1Mkg1MTJWMjI0QzUxMiAyMDYuMzI4IDUyNi4zMTIgMTkyIDU0NCAxOTJTNTc2IDIwNi4zMjggNTc2IDIyNFYzODRDNTc2IDQwMS42NzIgNTYxLjY4OCA0MTYgNTQ0IDQxNloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowTrendDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M466.75 352L320 205.25L214.625 310.625C208.375 316.875 200.188 320 192 320S175.625 316.875 169.375 310.625L9.375 150.625C3.125 144.375 0 136.188 0 128C0 109.721 14.947 96 32 96C40.188 96 48.375 99.125 54.625 105.375L192 242.75L297.375 137.375C303.625 131.125 311.812 128 320 128S336.375 131.125 342.625 137.375L512 306.75V352H466.75Z" />
            <path d="M544 416H384C366.312 416 352 401.672 352 384S366.312 352 384 352H512V224C512 206.328 526.312 192 544 192S576 206.328 576 224V384C576 401.672 561.688 416 544 416Z" />
        </Icon>
    </>
}