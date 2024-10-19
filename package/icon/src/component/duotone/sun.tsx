
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sun` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sun?s=duotone sun}
 * @preview ![sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwOS4yNjMgMzQ3LjAxTDQ0Ni4xMDkgMjU2TDUwOS4yNjIgMTY0Ljk4OUM1MTUuNTk0IDE1NS44NjQgNTEwLjM2NSAxNDMuMjQ3IDQ5OS40MzUgMTQxLjI3MUwzOTAuNDI5IDEyMS41NzFMMzcwLjcyOCAxMi41NjNDMzY4Ljc1NCAxLjYzMSAzNTYuMTM1IC0zLjU5MyAzNDcuMDA4IDIuNzM5TDI1NiA2NS44ODlMMTY0Ljk5IDIuNzM3QzE1NS44NjUgLTMuNTk1IDE0My4yNDYgMS42MjkgMTQxLjI2OSAxMi41NjFMMTIxLjU3IDEyMS41NzFMMTIuNTYyIDE0MS4yNjlDMS42MzMgMTQzLjI0NSAtMy41OTYgMTU1Ljg2NCAyLjczNiAxNjQuOTg4TDY1Ljg5IDI1Ni4wMDFMMi43MzggMzQ3LjAxMkMtMy41OTQgMzU2LjEzNyAxLjYzMyAzNjguNzU0IDEyLjU2MiAzNzAuNzI4TDEyMS41NyAzOTAuNDI4TDE0MS4yNjkgNDk5LjQzOEMxNDMuMjQ0IDUxMC4zNjggMTU1Ljg2MyA1MTUuNTk2IDE2NC45OSA1MDkuMjYyTDI1NiA0NDYuMTFMMzQ3LjAxIDUwOS4yNjJDMzU2LjEzNyA1MTUuNTk2IDM2OC43NTYgNTEwLjM3IDM3MC43MyA0OTkuNDRMMzkwLjQyOCAzOTAuNDI4TDQ5OS40MzcgMzcwLjcyOEM1MTAuMzY5IDM2OC43NTQgNTE1LjU5NiAzNTYuMTM3IDUwOS4yNjMgMzQ3LjAxWk0yNTYgMzg0LjAwMkMxODUuMzA2IDM4NC4wMDIgMTI4IDMyNi42OTMgMTI4IDI1Ni4wMDFDMTI4IDE4NS4zMDggMTg1LjMwNiAxMjguMDAxIDI1NiAxMjguMDAxUzM4NCAxODUuMzA4IDM4NCAyNTYuMDAxQzM4NCAzMjYuNjkzIDMyNi42OTMgMzg0LjAwMiAyNTYgMzg0LjAwMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjU2IDE2MC4wMDJDMjAyLjk4IDE2MC4wMDIgMTYwIDIwMi45ODIgMTYwIDI1Ni4wMDJTMjAyLjk4IDM1Mi4wMDIgMjU2IDM1Mi4wMDJTMzUyIDMwOS4wMjIgMzUyIDI1Ni4wMDJTMzA5LjAyIDE2MC4wMDIgMjU2IDE2MC4wMDJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Sun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M509.263 347.01L446.109 256L509.262 164.989C515.594 155.864 510.365 143.247 499.435 141.271L390.429 121.571L370.728 12.563C368.754 1.631 356.135 -3.593 347.008 2.739L256 65.889L164.99 2.737C155.865 -3.595 143.246 1.629 141.269 12.561L121.57 121.571L12.562 141.269C1.633 143.245 -3.596 155.864 2.736 164.988L65.89 256.001L2.738 347.012C-3.594 356.137 1.633 368.754 12.562 370.728L121.57 390.428L141.269 499.438C143.244 510.368 155.863 515.596 164.99 509.262L256 446.11L347.01 509.262C356.137 515.596 368.756 510.37 370.73 499.44L390.428 390.428L499.437 370.728C510.369 368.754 515.596 356.137 509.263 347.01ZM256 384.002C185.306 384.002 128 326.693 128 256.001C128 185.308 185.306 128.001 256 128.001S384 185.308 384 256.001C384 326.693 326.693 384.002 256 384.002Z" />
            <path d="M256 160.002C202.98 160.002 160 202.982 160 256.002S202.98 352.002 256 352.002S352 309.022 352 256.002S309.02 160.002 256 160.002Z" />
        </Icon>
    </>
}