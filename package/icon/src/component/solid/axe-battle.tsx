
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `axe-battle` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/axe-battle?s=solid axe-battle}
 * @preview ![axe-battle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzJDMjM4LjMyOCAzMiAyMjQgNDYuMzI2IDIyNCA2NFY0OTZDMjI0IDUwNC44MzYgMjMxLjE2NCA1MTIgMjQwIDUxMkgyNzJDMjgwLjgzNiA1MTIgMjg4IDUwNC44MzYgMjg4IDQ5NlY2NEMyODggNDYuMzI2IDI3My42NzIgMzIgMjU2IDMyWk0xMDEgMTMuNTg2Qzk3Ljg3NSAwLjU4NCA4My4zNzUgLTQuNTQzIDc0LjI1IDQuNzA5QzI4LjYyNSA1MC44NDQgMCAxMTcuNjA5IDAgMTkyUzI4LjYyNSAzMzMuMTU2IDc0LjI1IDM3OS4yOTFDODMuMzc1IDM4OC41NDMgOTcuODc1IDM4My40MTYgMTAxIDM3MC40MTRDMTEyLjg3NSAzMjAuNjUyIDE0Ny43NSAyODIuMTQ1IDE5MiAyNjkuMTQzVjExNC44NTdDMTQ3Ljc1IDEwMS44NTUgMTEyLjg3NSA2My4zNDggMTAxIDEzLjU4NlpNNTEyIDE2MC44NjlDNTA1LjEyNSA5OS4xMDUgNDc4LjM3NSA0NC4yMTkgNDM5IDQuNzA5QzQyOS43NSAtNC41NDMgNDE1IDAuNTg0IDQxMS44NzUgMTMuNTg2QzM5OS44NzUgNjMuMzQ4IDM2NC42MjUgMTAxLjg1NSAzMjAgMTE0Ljg1N1YyNjkuMTQzQzM2NC42MjUgMjgyLjE0NSAzOTkuODc1IDMyMC42NTIgNDExLjg3NSAzNzAuNDE0QzQxNSAzODMuNDE2IDQyOS43NSAzODguNTQzIDQzOSAzNzkuMjkxQzQ3OC4zNzUgMzM5Ljc4MSA1MDUuMTI1IDI4NC44OTUgNTEyIDIyMy4xMzFMNDQ5LjI1IDE5Mkw1MTIgMTYwLjg2OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AxeBattle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 32C238.328 32 224 46.326 224 64V496C224 504.836 231.164 512 240 512H272C280.836 512 288 504.836 288 496V64C288 46.326 273.672 32 256 32ZM101 13.586C97.875 0.584 83.375 -4.543 74.25 4.709C28.625 50.844 0 117.609 0 192S28.625 333.156 74.25 379.291C83.375 388.543 97.875 383.416 101 370.414C112.875 320.652 147.75 282.145 192 269.143V114.857C147.75 101.855 112.875 63.348 101 13.586ZM512 160.869C505.125 99.105 478.375 44.219 439 4.709C429.75 -4.543 415 0.584 411.875 13.586C399.875 63.348 364.625 101.855 320 114.857V269.143C364.625 282.145 399.875 320.652 411.875 370.414C415 383.416 429.75 388.543 439 379.291C478.375 339.781 505.125 284.895 512 223.131L449.25 192L512 160.869Z" />
        </Icon>
    </>
}