
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `yarn` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/yarn?s=brands yarn}
 * @preview ![yarn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTMuOSAzNDUuMmMtMzkgOS4zLTQ4LjQgMzIuMS0xMDQgNDcuNCAwIDAtMi43IDQtMTAuNCA1LjgtMTMuNCAzLjMtNjMuOSA2LTY4LjUgNi4xLTEyLjQuMS0xOS45LTMuMi0yMi04LjItNi40LTE1LjMgOS4yLTIyIDkuMi0yMi04LjEtNS05LTkuOS05LjgtOC4xLTIuNCA1LjgtMy42IDIwLjEtMTAuMSAyNi41LTguOCA4LjktMjUuNSA1LjktMzUuMy44LTEwLjgtNS43LjgtMTkuMi44LTE5LjJzLTUuOCAzLjQtMTAuNS0zLjZjLTYtOS4zLTE3LjEtMzcuMyAxMS41LTYyLTEuMy0xMC4xLTQuNi01My43IDQwLjYtODUuNiAwIDAtMjAuNi0yMi44LTEyLjktNDMuMyA1LTEzLjQgNy0xMy4zIDguNi0xMy45IDUuNy0yLjIgMTEuMy00LjYgMTUuNC05LjEgMjAuNi0yMi4yIDQ2LjgtMTggNDYuOC0xOHMxMi40LTM3LjggMjMuOS0zMC40YzMuNSAyLjMgMTYuMyAzMC42IDE2LjMgMzAuNnMxMy42LTcuOSAxNS4xLTVjOC4yIDE2IDkuMiA0Ni41IDUuNiA2NS4xLTYuMSAzMC42LTIxLjQgNDcuMS0yNy42IDU3LjUtMS40IDIuNCAxNi41IDEwIDI3LjggNDEuMyAxMC40IDI4LjYgMS4xIDUyLjcgMi44IDU1LjMuOCAxLjQgMTMuNy44IDM2LjQtMTMuMiAxMi44LTcuOSAyOC4xLTE2LjkgNDUuNC0xNyAxNi43LS41IDE3LjYgMTkuMiA0LjkgMjIuMnpNNDk2IDI1NmMwIDEzNi45LTExMS4xIDI0OC0yNDggMjQ4UzAgMzkyLjkgMCAyNTYgMTExLjEgOCAyNDggOHMyNDggMTExLjEgMjQ4IDI0OHptLTc5LjMgNzUuMmMtMS43LTEzLjYtMTMuMi0yMy0yOC0yMi44LTIyIC4zLTQwLjUgMTEuNy01Mi44IDE5LjItNC44IDMtOC45IDUuMi0xMi40IDYuOCAzLjEtNDQuNS0yMi41LTczLjEtMjguNy03OS40IDcuOC0xMS4zIDE4LjQtMjcuOCAyMy40LTUzLjIgNC4zLTIxLjcgMy01NS41LTYuOS03NC41LTEuNi0zLjEtNy40LTExLjItMjEtNy40LTkuNy0yMC0xMy0yMi4xLTE1LjYtMjMuOC0xLjEtLjctMjMuNi0xNi40LTQxLjQgMjgtMTIuMi45LTMxLjMgNS4zLTQ3LjUgMjIuOC0yIDIuMi01LjkgMy44LTEwLjEgNS40aC4xYy04LjQgMy0xMi4zIDkuOS0xNi45IDIyLjMtNi41IDE3LjQuMiAzNC42IDYuOCA0NS43LTE3LjggMTUuOS0zNyAzOS44LTM1LjcgODIuNS0zNCAzNi0xMS44IDczLTUuNiA3OS42LTEuNiAxMS4xIDMuNyAxOS40IDEyIDIzLjggMTIuNiA2LjcgMzAuMyA5LjYgNDMuOSAyLjggNC45IDUuMiAxMy44IDEwLjEgMzAgMTAuMSA2LjggMCA1OC0yLjkgNzIuNi02LjUgNi44LTEuNiAxMS41LTQuNSAxNC42LTcuMSA5LjgtMy4xIDM2LjgtMTIuMyA2Mi4yLTI4LjcgMTgtMTEuNyAyNC4yLTE0LjIgMzcuNi0xNy40IDEyLjktMy4yIDIxLTE1LjEgMTkuNC0yOC4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Yarn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 496 512" {...props}>
            <path d="M393.9 345.2c-39 9.3-48.4 32.1-104 47.4 0 0-2.7 4-10.4 5.8-13.4 3.3-63.9 6-68.5 6.1-12.4.1-19.9-3.2-22-8.2-6.4-15.3 9.2-22 9.2-22-8.1-5-9-9.9-9.8-8.1-2.4 5.8-3.6 20.1-10.1 26.5-8.8 8.9-25.5 5.9-35.3.8-10.8-5.7.8-19.2.8-19.2s-5.8 3.4-10.5-3.6c-6-9.3-17.1-37.3 11.5-62-1.3-10.1-4.6-53.7 40.6-85.6 0 0-20.6-22.8-12.9-43.3 5-13.4 7-13.3 8.6-13.9 5.7-2.2 11.3-4.6 15.4-9.1 20.6-22.2 46.8-18 46.8-18s12.4-37.8 23.9-30.4c3.5 2.3 16.3 30.6 16.3 30.6s13.6-7.9 15.1-5c8.2 16 9.2 46.5 5.6 65.1-6.1 30.6-21.4 47.1-27.6 57.5-1.4 2.4 16.5 10 27.8 41.3 10.4 28.6 1.1 52.7 2.8 55.3.8 1.4 13.7.8 36.4-13.2 12.8-7.9 28.1-16.9 45.4-17 16.7-.5 17.6 19.2 4.9 22.2zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-79.3 75.2c-1.7-13.6-13.2-23-28-22.8-22 .3-40.5 11.7-52.8 19.2-4.8 3-8.9 5.2-12.4 6.8 3.1-44.5-22.5-73.1-28.7-79.4 7.8-11.3 18.4-27.8 23.4-53.2 4.3-21.7 3-55.5-6.9-74.5-1.6-3.1-7.4-11.2-21-7.4-9.7-20-13-22.1-15.6-23.8-1.1-.7-23.6-16.4-41.4 28-12.2.9-31.3 5.3-47.5 22.8-2 2.2-5.9 3.8-10.1 5.4h.1c-8.4 3-12.3 9.9-16.9 22.3-6.5 17.4.2 34.6 6.8 45.7-17.8 15.9-37 39.8-35.7 82.5-34 36-11.8 73-5.6 79.6-1.6 11.1 3.7 19.4 12 23.8 12.6 6.7 30.3 9.6 43.9 2.8 4.9 5.2 13.8 10.1 30 10.1 6.8 0 58-2.9 72.6-6.5 6.8-1.6 11.5-4.5 14.6-7.1 9.8-3.1 36.8-12.3 62.2-28.7 18-11.7 24.2-14.2 37.6-17.4 12.9-3.2 21-15.1 19.4-28.2z" />
        </Icon>
    </>
}