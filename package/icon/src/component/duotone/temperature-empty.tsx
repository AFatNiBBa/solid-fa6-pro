
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `temperature-empty` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-empty?s=duotone temperature-empty}
 * @preview ![temperature-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI3MiAyNzguNTAxVjExMi4wMDFDMjcyIDUwLjEyNiAyMjEuODc1IDAuMDAxIDE2MCAwLjAwMVM0OCA1MC4xMjYgNDggMTEyLjAwMVYyNzguNTAxQzI4LjI1IDMwMy4yNTEgMTYgMzM0LjAwMSAxNiAzNjguMDAxQzE2IDQ0Ny41MDEgODAuNSA1MTIuMDAxIDE2MCA1MTIuMDAxUzMwNCA0NDcuNTAxIDMwNCAzNjguMDAxQzMwNCAzMzQuMDAxIDI5MS43NSAzMDMuMTI2IDI3MiAyNzguNTAxWk0xNjAgNDQ4LjAwMUMxMTUuODc1IDQ0OC4wMDEgODAgNDEyLjEyNiA4MCAzNjguMDAxQzgwIDM0Mi41MDEgOTIuMjUgMzE5LjEyNiAxMTIgMzA0LjI1MVYxMTIuMDAxQzExMiA4NS41MDEgMTMzLjUgNjQuMDAxIDE2MCA2NC4wMDFTMjA4IDg1LjUwMSAyMDggMTEyLjAwMVYzMDQuMjUxQzIyNy43NSAzMTkuMDAxIDI0MCAzNDIuNTAxIDI0MCAzNjguMDAxQzI0MCA0MTIuMTI2IDIwNC4xMjUgNDQ4LjAwMSAxNjAgNDQ4LjAwMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTYwIDMyMC4wMDFDMTMzLjQ5IDMyMC4wMDEgMTEyIDM0MS40OTEgMTEyIDM2OC4wMDFTMTMzLjQ5IDQxNi4wMDEgMTYwIDQxNi4wMDFTMjA4IDM5NC41MSAyMDggMzY4LjAwMVMxODYuNTEgMzIwLjAwMSAxNjAgMzIwLjAwMVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function TemperatureEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M272 278.501V112.001C272 50.126 221.875 0.001 160 0.001S48 50.126 48 112.001V278.501C28.25 303.251 16 334.001 16 368.001C16 447.501 80.5 512.001 160 512.001S304 447.501 304 368.001C304 334.001 291.75 303.126 272 278.501ZM160 448.001C115.875 448.001 80 412.126 80 368.001C80 342.501 92.25 319.126 112 304.251V112.001C112 85.501 133.5 64.001 160 64.001S208 85.501 208 112.001V304.251C227.75 319.001 240 342.501 240 368.001C240 412.126 204.125 448.001 160 448.001Z" />
            <path d="M160 320.001C133.49 320.001 112 341.491 112 368.001S133.49 416.001 160 416.001S208 394.51 208 368.001S186.51 320.001 160 320.001Z" />
        </Icon>
    </>
}