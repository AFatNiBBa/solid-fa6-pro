
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `symfony` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/symfony?s=brands symfony}
 * @preview ![symfony](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4em0xMzMuNzQgMTQzLjU0Yy0xMS40Ny40MS0xOS40LTYuNDUtMTkuNzctMTYuODctLjI3LTkuMTggNi42OC0xMy40NCA2LjUzLTE4Ljg1LS4yMy02LjU1LTEwLjE2LTYuODItMTIuODctNi42Ny0zOS43OCAxLjI5LTQ4LjU5IDU3LTU4Ljg5IDExMy44NSAyMS40MyAzLjE1IDM2LjY1LS43MiA0NS4xNC02LjIyIDEyLTcuNzUtMy4zNC0xNS43Mi0xLjQyLTI0LjU2IDQtMTguMTYgMzIuNTUtMTkgMzIgNS4zLS4zNiAxNy44Ni0yNS45MiA0MS44MS03Ny42IDM1LjctMTAuNzYgNTkuNTItMTguMzUgMTE1LTU4LjIgMTYxLjcyLTI5IDM0LjQ2LTU4LjQgMzkuODItNzEuNTggNDAuMjYtMjQuNjUuODUtNDEtMTIuMzEtNDEuNTgtMjkuODQtLjU2LTE3IDE0LjQ1LTI2LjI2IDI0LjMxLTI2LjU5IDIxLjg5LS43NSAzMC4xMiAyNS42NyAxNC44OCAzNC0xMi4wOSA5LjcxLjExIDEyLjYxIDIuMDUgMTIuNTUgMTAuNDItLjM2IDE3LjM0LTUuNTEgMjIuMTgtOSAyNC0yMCAzMy4yNC01NC44NiA0NS4zNS0xMTguMzUgOC4xOS00OS42NiAxNy03OCAxOC4yMy04Mi0xNi45My0xMi43NS0yNy4wOC0yOC41NS00OS44NS0zNC43Mi0xNS42MS00LjIzLTI1LjEyLS42My0zMS44MSA3LjgzLTcuOTIgMTAtNS4yOSAyMyAyLjM3IDMwLjdsMTIuNjMgMTRjMTUuNTEgMTcuOTMgMjQgMzEuODcgMjAuOCA1MC42Mi01LjA2IDI5LjkzLTQwLjcyIDUyLjktODIuODggMzkuOTQtMzYtMTEuMTEtNDIuNy0zNi41Ni0zOC4zOC01MC42MiA3LjUxLTI0LjE1IDQyLjM2LTExLjcyIDM0LjYyIDEzLjYtMi43OSA4LjYtNC45MiA4LjY4LTYuMjggMTMuMDctNC41NiAxNC43NyA0MS44NSAyOC40IDUxLTEuMzkgNC40Ny0xNC41Mi01LjMtMjEuNzEtMjIuMjUtMzkuODUtMjguNDctMzEuNzUtMTYtNjUuNDkgMi45NS03OS42N0MyMDQuMjMgMTQwLjEzIDI1MS45NCAxOTcgMjYyIDIwNS4yOWMzNy4xNy0xMDkgMTAwLjUzLTEwNS40NiAxMDIuNDMtMTA1LjUzIDI1LjE2LS44MSA0NC4xOSAxMC41OSA0NC44MyAyOC42NS4yNSA3LjY5LTQuMTcgMjIuNTktMTkuNTIgMjMuMTN6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Symfony(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm133.74 143.54c-11.47.41-19.4-6.45-19.77-16.87-.27-9.18 6.68-13.44 6.53-18.85-.23-6.55-10.16-6.82-12.87-6.67-39.78 1.29-48.59 57-58.89 113.85 21.43 3.15 36.65-.72 45.14-6.22 12-7.75-3.34-15.72-1.42-24.56 4-18.16 32.55-19 32 5.3-.36 17.86-25.92 41.81-77.6 35.7-10.76 59.52-18.35 115-58.2 161.72-29 34.46-58.4 39.82-71.58 40.26-24.65.85-41-12.31-41.58-29.84-.56-17 14.45-26.26 24.31-26.59 21.89-.75 30.12 25.67 14.88 34-12.09 9.71.11 12.61 2.05 12.55 10.42-.36 17.34-5.51 22.18-9 24-20 33.24-54.86 45.35-118.35 8.19-49.66 17-78 18.23-82-16.93-12.75-27.08-28.55-49.85-34.72-15.61-4.23-25.12-.63-31.81 7.83-7.92 10-5.29 23 2.37 30.7l12.63 14c15.51 17.93 24 31.87 20.8 50.62-5.06 29.93-40.72 52.9-82.88 39.94-36-11.11-42.7-36.56-38.38-50.62 7.51-24.15 42.36-11.72 34.62 13.6-2.79 8.6-4.92 8.68-6.28 13.07-4.56 14.77 41.85 28.4 51-1.39 4.47-14.52-5.3-21.71-22.25-39.85-28.47-31.75-16-65.49 2.95-79.67C204.23 140.13 251.94 197 262 205.29c37.17-109 100.53-105.46 102.43-105.53 25.16-.81 44.19 10.59 44.83 28.65.25 7.69-4.17 22.59-19.52 23.13z" />
        </Icon>
    </>
}